import { segmentPointsFromCommand } from './segment'
import type {
  PointObject,
  FixedType,
  ResizeBoundingBoxBase,
  PathClass,
} from '../types'

const fallbackPointObject: PointObject = { x: 0, y: 0 }

export class BoundingBox {
  constructor(private paths: PathClass[]) {}

  private get points(): PointObject[] {
    return this.paths.flatMap((path) => {
      let prev: PointObject | undefined = undefined

      return path.absoluteCommands.flatMap((command) => {
        const pts: PointObject[] = segmentPointsFromCommand(command, {
          base: prev,
        })

        prev = command.point ? command.point.toJson() : undefined

        return pts
      })
    })
  }

  private get pointsX(): number[] {
    return this.points.map((point) => point.x)
  }

  private get pointsY(): number[] {
    return this.points.map((point) => point.y)
  }

  get min(): PointObject {
    if (this.points.length === 0) return fallbackPointObject

    return {
      x: Math.min(...this.pointsX),
      y: Math.min(...this.pointsY),
    }
  }

  get max(): PointObject {
    if (this.points.length === 0) return fallbackPointObject

    return {
      x: Math.max(...this.pointsX),
      y: Math.max(...this.pointsY),
    }
  }

  get width(): number {
    return this.max.x - this.min.x
  }

  get height(): number {
    return this.max.y - this.min.y
  }

  get vertex(): Record<FixedType, PointObject> {
    return {
      ['LeftTop']: { x: this.min.x, y: this.min.y },
      ['RightTop']: { x: this.max.x, y: this.min.y },
      ['RightBottom']: { x: this.max.x, y: this.max.y },
      ['LeftBottom']: { x: this.min.x, y: this.max.y },
    }
  }

  public resizeParams(
    fixedType: FixedType,
    movePoint: PointObject
  ): { scale: PointObject; move: PointObject } {
    const width = this.width
    const height = this.height

    switch (fixedType) {
      case 'LeftTop': {
        const scale = {
          x: (width - movePoint.x) / width,
          y: (height - movePoint.y) / height,
        }
        const move = {
          x: -(this.max.x * scale.x - this.max.x),
          y: -(this.max.y * scale.y - this.max.y),
        }
        return { scale, move }
      }
      case 'RightTop': {
        const scale = {
          x: (width + movePoint.x) / width,
          y: (height - movePoint.y) / height,
        }
        return {
          scale,
          move: {
            x: -(this.min.x * scale.x - this.min.x),
            y: -(this.max.y * scale.y - this.max.y),
          },
        }
      }
      case 'LeftBottom': {
        const scale = {
          x: (width - movePoint.x) / width,
          y: (height + movePoint.y) / height,
        }

        return {
          scale,
          move: {
            x: -(this.max.x * scale.x - this.max.x),
            y: -(this.min.y * scale.y - this.min.y),
          },
        }
      }
      case 'RightBottom': {
        const scale = {
          x: (width + movePoint.x) / width,
          y: (height + movePoint.y) / height,
        }
        return {
          scale,
          move: {
            x: -(this.min.x * scale.x - this.min.x),
            y: -(this.min.y * scale.y - this.min.y),
          },
        }
      }
    }
  }
}