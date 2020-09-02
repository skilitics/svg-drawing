import { Point, Command, COMMAND_TYPE } from './svg'

interface BezierCurveOption {
  ratio?: number
}
export class BezierCurve {
  public ratio: number
  constructor({ ratio }: BezierCurveOption = {}) {
    this.ratio = ratio ?? 0.2
  }
  private _controlPoint(
    prev: Point,
    start: Point,
    next: Point
  ): [number, number] {
    const vector = next.sub(prev).toVector().scale(this.ratio).toPoint()
    const po = start.add(vector)
    return [po.x, po.y]
  }

  public createCurve(p1: Point, p2: Point, p3: Point, p4: Point): Command {
    const value = [
      ...this._controlPoint(p1, p2, p3),
      ...this._controlPoint(p4, p3, p2),
      p3.x,
      p3.y,
    ]
    return new Command(COMMAND_TYPE.CURVE, value)
  }

  public createCurveRelative(
    p1: Point,
    p2: Point,
    p3: Point,
    p4: Point
  ): Command {
    const c1 = p2.add(p3).toVector().scale(this.ratio).toPoint()
    const c2 = p3
      .add(p4)
      .reverse()
      .toVector()
      .scale(this.ratio)
      .toPoint()
      .add(p3)
    const value = [c1.x, c1.y, c2.x, c2.y, p3.x, p3.y]
    return new Command(COMMAND_TYPE.CURVE_RELATIVE, value)
  }
}
