import { Point, Command, Vector, COMMAND_TYPE } from './svg'
import { PointObject, ConvertOption } from './types'

// TODO: move types.ts
export type CommandsConverter = (points: PointObject[]) => Command[]
export interface GenerateCommandsConverter {
  convert: CommandsConverter
}

export const convertLineCommands: CommandsConverter = (points) =>
  points.map(
    (p, i) =>
      new Command(i === 0 ? COMMAND_TYPE.MOVE : COMMAND_TYPE.LINE, [p.x, p.y])
  )

const genVector = ({
  prev,
  next,
}: {
  prev: PointObject
  next: PointObject
}): Vector =>
  new Point(next.x, next.y).sub(new Point(prev.x, prev.y)).toVector()

const curveVector = ({
  prev,
  next,
  value,
}: {
  prev: PointObject
  next: PointObject
  value: number
}): Vector => new Vector(value, genVector({ prev, next }).angle)
export class BezierCurve implements GenerateCommandsConverter {
  public ratio: number
  constructor({ ratio }: ConvertOption = {}) {
    this.ratio = ratio ?? 0.4
    this.convert = this.convert.bind(this)
  }

  public genCommand(
    p1: PointObject,
    p2: PointObject,
    p3: PointObject,
    p4: PointObject
  ): Command {
    const value = genVector({ prev: p2, next: p3 }).value * this.ratio
    const vPrev = curveVector({ prev: p1, next: p3, value })
    const vNext = curveVector({ prev: p4, next: p2, value })

    const cPrev = new Point(p2.x, p2.y).add(vPrev.toPoint())
    const cNext = new Point(p3.x, p3.y).add(vNext.toPoint())
    return new Command(COMMAND_TYPE.CURVE, [
      cPrev.x,
      cPrev.y,
      cNext.x,
      cNext.y,
      p3.x,
      p3.y,
    ])
  }

  public convert(p: PointObject[]): Command[] {
    const commands: Command[] = []
    if (p.length < 3) {
      return convertLineCommands(p)
    }
    for (let i = 0; i < p.length; i += 1) {
      if (i === 0) {
        commands.push(new Command(COMMAND_TYPE.MOVE, [p[i].x, p[i].y]))
        continue
      }
      commands.push(
        this.genCommand(
          p[i - 2 < 0 ? 0 : i - 2],
          p[i - 1],
          p[i],
          i < p.length - 1 ? p[i + 1] : p[i]
        )
      )
    }
    return commands
  }
}

export const closeCommands = (commands: Command[]): Command[] => [
  ...commands,
  new Command(COMMAND_TYPE.CLOSE),
]
