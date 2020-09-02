import { Renderer, RendererOption } from './renderer'
import { Path, Point, Command, COMMAND_TYPE } from './svg'
import { BezierCurve } from './bezier'
import { throttle } from './throttle'
import { getPassiveOptions } from './shared/getPassiveOptions'

export type DrawingMode = 'pen' | 'pencil'
export interface DrawingOption extends RendererOption {
  mode?: DrawingMode
  penColor?: string
  penWidth?: number
  close?: boolean
  curve?: boolean
  delay?: number
  fill?: string
}

export class SvgDrawing extends Renderer implements DrawingOption {
  public mode: DrawingMode
  public penColor: string
  public penWidth: number
  public fill: string
  public curve: boolean
  public close: boolean
  public delay: number
  public bezier: BezierCurve
  private _top: number
  private _left: number
  private _drawPath: Path | null
  private _drawMoveThrottle: this['drawMove']
  private _prevPoint: [number, number] | null
  private _listenerOption: ReturnType<typeof getPassiveOptions>
  private _clearPointListener: (() => void) | null
  private _clearMouseListener: (() => void) | null
  private _clearTouchListener: (() => void) | null
  private _clearPenListener: (() => void) | null
  constructor(
    el: HTMLElement,
    {
      mode,
      penColor,
      penWidth,
      curve,
      close,
      delay,
      fill,
      ...rendOpt
    }: DrawingOption = {}
  ) {
    super(el, { ...rendOpt })
    /**
     * Setup Option
     */
    this.mode = mode ?? 'pencil'
    this.penColor = penColor ?? '#000'
    this.penWidth = penWidth ?? 1
    this.curve = curve ?? true
    this.close = close ?? false
    this.delay = delay ?? 20
    this.fill = fill ?? 'none'
    /**
     * Setup property
     */
    const { left, top } = el.getBoundingClientRect()
    this.bezier = new BezierCurve()
    this._left = left
    this._top = top
    this._drawPath = null
    this._prevPoint = null
    this._listenerOption = getPassiveOptions(false)
    this._clearPointListener = null
    this._clearMouseListener = null
    this._clearTouchListener = null
    this._clearPenListener = null
    /**
     * Setup listener
     */
    this._handleStart = this._handleStart.bind(this)
    this._handleDraw = this._handleDraw.bind(this)
    this._handleDrawForTouch = this._handleDrawForTouch.bind(this)
    this._handleEnd = this._handleEnd.bind(this)
    this._drawMoveThrottle = throttle(this.drawMove, this.delay)
    this.on()
    this._setupScrollListener()
  }

  public clear(): void {
    this.paths = []
    this.update()
  }

  public undo(): void {
    this.paths.pop()
    this.update()
  }

  public changeDelay(delay: number): void {
    this.delay = delay
    this._drawMoveThrottle = throttle(this.drawMove, this.delay)
  }

  public on(): void {
    this.off()

    if (this.mode === 'pen') {
      this._setupPenListener()
      return
    }
    if (window.PointerEvent) {
      this._setupPointEventListener()
    } else {
      this._setupMouseEventListener()
    }
    if ('ontouchstart' in window) {
      this._setupTouchEventListener()
    }
  }

  public off(): void {
    ;[
      this._clearPointListener,
      this._clearMouseListener,
      this._clearTouchListener,
      this._clearPenListener,
    ].map((clear) => {
      if (!clear) return
      clear()
      clear = null
    })
  }

  public drawStart(): void {
    if (this._drawPath) return
    this._drawPath = this._createDrawPath()
    this.addPath(this._drawPath)
  }

  public drawMove(x: number, y: number): void {
    if (!this._drawPath) return
    const po: [number, number] = [x - this._left, y - this._top]
    // this._addDrawPoint(po)
    this._addDrawPointRelative(po)
    if (
      (this._drawPath.attrs.strokeWidth &&
        +this._drawPath.attrs.strokeWidth !== this.penWidth) ||
      this._drawPath.attrs.stroke !== this.penColor
    ) {
      this._drawPath = this._createDrawPath()
      this._addDrawPoint(po)
      this.addPath(this._drawPath)
    }
    this.update()
  }

  public drawEnd(): void {
    if (this.close && this._drawPath) {
      this._drawPath.commands.push(new Command(COMMAND_TYPE.CLOSE))
    }
    this._drawPath = null
    this._prevPoint = null
    this.update()
  }

  private _addDrawPoint(po: [number, number]) {
    if (!this._drawPath) return
    const commands = this._drawPath.commands
    if (
      commands.length === 0 ||
      commands[commands.length - 1].type === COMMAND_TYPE.CLOSE
    ) {
      commands.push(new Command(COMMAND_TYPE.MOVE, po))
      return
    }

    if (!this.curve || commands.length < 2) {
      commands.push(new Command(COMMAND_TYPE.LINE, po))
      return
    }

    const p1 =
      commands.length === 2
        ? commands[commands.length - 2].point
        : commands[commands.length - 3].point
    const p2 = commands[commands.length - 2].point
    const p3 = commands[commands.length - 1].point

    if (!p1 || !p2 || !p3) {
      commands.push(new Command(COMMAND_TYPE.LINE, po))
      return
    }

    const p4 = new Point(po[0], po[1])
    commands[commands.length - 1] = this.bezier.createCurve(p1, p2, p3, p4)
    commands.push(this.bezier.createCurve(p2, p3, p4, p4))
  }

  private _addDrawPointRelative(current: [number, number]) {
    if (!this._drawPath) return

    const commands = this._drawPath.commands
    if (!this._prevPoint) {
      this._drawPath.commands.push(new Command(COMMAND_TYPE.MOVE, current))
      this._prevPoint = current
      return
    }

    const po: [number, number] = [
      current[0] - this._prevPoint[0],
      current[1] - this._prevPoint[1],
    ]
    this._prevPoint = current

    if (!this.curve || commands.length < 2) {
      this._drawPath.commands.push(new Command(COMMAND_TYPE.LINE_RELATIVE, po))
      return
    }

    const p1 =
      commands.length < 4
        ? new Point(0, 0)
        : commands[commands.length - 3].point
    const p2 = commands[commands.length - 2].point
    const p3 = commands[commands.length - 1].point

    if (!p1 || !p2 || !p3) {
      this._drawPath.commands.push(new Command(COMMAND_TYPE.LINE_RELATIVE, po))
      return
    }

    const p4 = new Point(po[0], po[1])
    this._drawPath.commands[
      commands.length - 1
    ] = this.bezier.createCurveRelative(p1, p2, p3, p4)
    this._drawPath.commands.push(
      this.bezier.createCurveRelative(p2, p3, p4, new Point(0, 0))
    )
  }

  private _createDrawPath(): Path {
    return new Path({
      stroke: this.penColor,
      strokeWidth: String(this.penWidth),
      fill: this.fill,
      strokeLinecap: this.curve ? 'round' : 'mitter',
      strokeLinejoin: this.curve ? 'round' : 'square',
    })
  }

  private _handleStart(ev: TouchEvent | MouseEvent | PointerEvent) {
    ev.preventDefault()
    this.drawStart()
  }

  private _handleEnd(ev: TouchEvent | MouseEvent | PointerEvent) {
    ev.preventDefault()
    this.drawEnd()
  }

  private _handleDrawForTouch(ev: TouchEvent) {
    ev.preventDefault()
    const touch = ev.touches[0]
    this._drawMoveThrottle(touch.clientX, touch.clientY)
  }

  private _handleDraw(ev: MouseEvent | PointerEvent) {
    ev.preventDefault()
    this._drawMoveThrottle(ev.clientX, ev.clientY)
  }
  /**
   * Scroll Listener
   */
  private _setupScrollListener() {
    const handle = () => {
      const { left, top } = this.el.getBoundingClientRect()
      this._left = left
      this._top = top
    }

    window.addEventListener('scroll', handle, this._listenerOption)
  }

  /**
   * Drawing PointerEvent
   */
  private _setupPointEventListener(): void {
    this.el.addEventListener(
      'pointerdown',
      this._handleStart,
      this._listenerOption
    )
    this.el.addEventListener(
      'pointermove',
      this._handleDraw,
      this._listenerOption
    )
    this.el.addEventListener(
      'pointerleave',
      this._handleEnd,
      this._listenerOption
    )
    this.el.addEventListener(
      'pointercancel',
      this._handleEnd,
      this._listenerOption
    )
    window.addEventListener('pointerup', this._handleEnd, this._listenerOption)

    this._clearPointListener = () => {
      this.el.removeEventListener('pointerdown', this._handleStart)
      this.el.removeEventListener('pointermove', this._handleDraw)
      this.el.removeEventListener('pointerleave', this._handleEnd)
      this.el.addEventListener('pointercancel', this._handleEnd)
      window.removeEventListener('pointerup', this._handleEnd)
    }
  }
  /**
   * Drawing MouseEvent
   */
  private _setupMouseEventListener(): void {
    this.el.addEventListener(
      'mousedown',
      this._handleStart,
      this._listenerOption
    )
    this.el.addEventListener(
      'mousemove',
      this._handleDraw,
      this._listenerOption
    )
    this.el.addEventListener(
      'mouseleave',
      this._handleEnd,
      this._listenerOption
    )
    this.el.addEventListener('mouseout', this._handleEnd, this._listenerOption)
    window.addEventListener('mouseup', this._handleEnd, this._listenerOption)

    this._clearMouseListener = () => {
      this.el.removeEventListener('mousedown', this._handleStart)
      this.el.removeEventListener('mousemove', this._handleDraw)
      this.el.removeEventListener('mouseleave', this._handleEnd)
      this.el.removeEventListener('mouseout', this._handleEnd)
      window.removeEventListener('mouseup', this._handleEnd)
    }
  }

  /**
   * Drawing TouchEvent
   */
  private _setupTouchEventListener(): void {
    this.el.addEventListener(
      'touchstart',
      this._handleStart,
      this._listenerOption
    )
    this.el.addEventListener(
      'touchmove',
      this._handleDrawForTouch,
      this._listenerOption
    )
    this.el.addEventListener('touchend', this._handleEnd, this._listenerOption)
    window.addEventListener(
      'touchcancel',
      this._handleEnd,
      this._listenerOption
    )
    this._clearTouchListener = () => {
      this.el.removeEventListener('touchstart', this._handleStart)
      this.el.removeEventListener('touchmove', this._handleDrawForTouch)
      this.el.removeEventListener('touchend', this._handleEnd)
      window.removeEventListener('touchcancel', this._handleEnd)
    }
  }

  /**
   * Pen Mode
   */
  private _setupPenListener(): void {
    const handleDraw = (ev: MouseEvent) => {
      if (!this._drawPath) {
        this.drawStart()
      }
      this._handleDraw(ev)
    }
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.code === 'Escape' || ev.key === 'Escape' || ev.keyCode === 27) {
        this.drawEnd()
      }
    }
    const handleStop = (ev: MouseEvent) => {
      const inDrawArea = (x: number, y: number) => {
        const rect = this.el.getBoundingClientRect()
        console.log(
          rect.left,
          rect.top,
          rect.left + rect.width,
          rect.top + rect.height,
          x,
          y
        )
        if (
          rect.left > x ||
          rect.top > y ||
          rect.left + rect.width < x ||
          rect.top + rect.height < y
        ) {
          return false
        }
        return true
      }
      console.log(inDrawArea(ev.clientX, ev.clientY))

      if (!inDrawArea(ev.clientX, ev.clientY)) {
        this.drawEnd()
      }
    }
    this.el.addEventListener('click', handleDraw, this._listenerOption)
    document.addEventListener('keydown', handleKeyDown, this._listenerOption)
    window.addEventListener('click', handleStop, this._listenerOption)
    // this.el.removeEventListener('touchend', handlePen)
    this._clearPenListener = () => {
      this.el.removeEventListener('click', handleDraw)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleStop)
    }
  }
}
