import React from 'react'
import type { download } from '@svg-drawing-te/core/lib/download'
import type { SvgDrawing } from '@svg-drawing-te/core/lib/drawing'
import type { DrawingOption } from '@svg-drawing-te/core/lib/types'
import type { RefObject } from 'react'

export type UseSvgDrawing = {
  ref: RefObject<SvgDrawing | null>
  reset: () => void
  clear: () => void
  undo: () => void
  changePenColor: (penColor: DrawingOption['penColor']) => void
  changePenWidth: (penwidth: DrawingOption['penWidth']) => void
  changeFill: (penColor: DrawingOption['fill']) => void
  changeClose: (penwidth: DrawingOption['close']) => void
  changeDelay: (penColor: DrawingOption['delay']) => void
  changeCurve: (penwidth: DrawingOption['curve']) => void
  getSvgXML: () => string | null
  download: (opt: Parameters<typeof download>[1]) => void
}
