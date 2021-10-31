import { SvgDrawing, DrawFactory, DrawHandler } from '@svg-drawing/core'
import { useCallback, useMemo } from 'react'
import { useRenderInterval } from './useRenderInterval'
import type { DrawAction, UseDrawOptions } from '../types'

/**
 * @example
 *   import { PencilHandler } from '@svg-drawing/core'
 *   import {
 *     Svg,
 *     useDrawFactory,
 *     useDrawEventHandler,
 *   } from '@svg-drawing/react'
 *
 *   const DrawArea = () => {
 *     const svg = useSvg({ width: 500, height: 500 })
 *     const [svgObject, setSvgObject] = useState(svg.toJson())
 *
 *     const ref = useRef(null)
 *     const handler = useDrawEventHandler(ref, PencilHandler, true)
 *
 *     const factory = useDrawFactory(
 *       { stroke: '#000', fill: 'none' },
 *       { curve: true, close: false }
 *     )
 *
 *     const draw = useDraw({
 *       svg,
 *       handler,
 *       factory,
 *       onChangeSvg: setSvgObject,
 *     })
 *
 *     return (
 *       <div ref={ref}>
 *         <Svg {...svgObject} />
 *       </div>
 *     )
 *   }
 */
export const useDraw = <P extends DrawFactory, H extends DrawHandler>({
  factory,
  handler,
  svg,
  onChangeSvg,
}: UseDrawOptions<P, H>): DrawAction<P, H> => {
  const render = useCallback(() => {
    onChangeSvg(svg.toJson())
  }, [onChangeSvg, svg])

  const update = useRenderInterval(render)

  const draw = useMemo(
    () => new SvgDrawing(svg, factory, handler, update),
    [svg, factory, handler, update]
  )

  const clear = useCallback(() => draw.clear(), [draw])

  const undo = useCallback(() => draw.undo(), [draw])

  return {
    draw,
    update,
    clear,
    undo,
  }
}