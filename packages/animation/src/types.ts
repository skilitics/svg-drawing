import type { RendererOption, Path } from '@svg-drawing-te/core'
export type AnimationOption = RendererOption & {
  ms: number
}
export type FrameAnimation = (origin: Path[], loopIndex?: number) => Path[]
