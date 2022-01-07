import { calculatePoint } from './calculatePoint'
import { isCurveCommand, toAbsolutePath } from '../svg'
import type {
  PointObject,
  EditVertex,
  BoundingBox,
  EditPathObject,
  SelectingCommands,
  SelectingPoints,
  PathClass,
} from '../types'

const genOutline = (points: PointObject[]) =>
  points.reduce(
    (str, po, i) => (i === 0 ? `M ${po.x} ${po.y}` : str + `L ${po.x} ${po.y}`),
    ''
  )

const fallbackBoundingBox: BoundingBox = {
  min: { x: 0, y: 0 },
  max: { x: 0, y: 0 },
}

/** @todo Rename PathEdit ? */
export class EditPath {
  constructor(public path: PathClass, public selecting?: SelectingCommands) {}

  private get absolutePath() {
    return toAbsolutePath(this.path)
  }

  /** @todo Compatible for Quadratic and shortcut curve */
  private get points(): PointObject[] {
    const points: PointObject[] = []
    let prev: PointObject | undefined = undefined

    for (const command of this.absolutePath.commands) {
      if (!command.point) {
        prev = undefined
        continue
      }

      const addPoints: PointObject[] = isCurveCommand(command)
        ? calculatePoint([
            prev || (command.points[0].toJson() as PointObject),
            ...(command.points.map((p) => p.toJson()) as [
              PointObject,
              PointObject,
              PointObject
            ]),
          ])
        : [command.point]

      points.push(...addPoints)

      prev = command.point?.toJson()
    }

    return points
  }

  public get vertex(): EditVertex[] {
    const vertex: EditVertex[] = []
    const commands = this.absolutePath.commands
    for (let c = 0; c < commands.length; c += 1) {
      const curr = commands[c]
      const next = commands[c + 1]

      const outlinePoints: PointObject[] = [
        curr.points[1]?.toJson(),
        curr.points[2]?.toJson(),
        next?.points[0]?.toJson(),
      ].filter((p): p is PointObject => !!p)

      const selectingPoints: SelectingPoints | null =
        this.selecting?.[c] ?? null

      vertex.push({
        points: curr.points.map((point, pIndex) => ({
          index: {
            path: this.path.key,
            command: c,
            point: pIndex,
          },
          value: point.toJson(),
          selected: selectingPoints?.includes(pIndex) ?? false,
        })),
        d: genOutline(outlinePoints),
      })
    }

    return vertex
  }

  public get boundingBox(): BoundingBox {
    const points = this.points
    if (points.length === 0) return fallbackBoundingBox
    let minX = points[0].x
    let minY = points[0].y
    let maxX = points[0].x
    let maxY = points[0].y
    for (let i = 1; i < points.length; i += 1) {
      const po = points[i]
      if (po.x < minX) minX = po.x
      if (po.x > maxX) maxX = po.x
      if (po.y < minY) minY = po.y
      if (po.y > maxY) maxY = po.y
    }

    return {
      min: { x: minX, y: minY },
      max: { x: maxX, y: maxY },
    }
  }

  public toJson(): EditPathObject {
    return {
      key: this.path.key,
      d: this.path.getCommandString(),
      boundingBox: this.boundingBox,
      vertex: this.vertex,
    }
  }
}