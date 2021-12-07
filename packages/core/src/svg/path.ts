import {
  isAbsoluteCommand,
  toRelativeCommand,
  isRelativeCommand,
  toAbsoluteCommand,
} from './command'
import type { Command, PathAttributes, PointObject, PathObject } from '../types'

/**
 * @todo: refactor command. The following commands are not supported.
 *
 * Cannot support commands that use `M` or` z` more than once `M 0 0 L 1 1 Z M 1 1 L 2 2 Z`
 */
export class Path {
  private static index = 0
  private static genIndex = () => (Path.index += 1)
  public commands: Command[] = []
  public key: string
  constructor(public attrs: PathAttributes = {}, _key?: string) {
    this.key = _key || `p${Path.genIndex()}`
  }

  public scale(r: number): this {
    this.commands = this.commands.map((c: Command) => c.scale(r))
    return this
  }

  public scaleX(r: number): this {
    this.commands = this.commands.map((c: Command) => c.scaleX(r))
    return this
  }

  public scaleY(r: number): this {
    this.commands = this.commands.map((c: Command) => c.scaleY(r))
    return this
  }

  public addCommand(param: Command | Command[]): this {
    if (Array.isArray(param)) {
      this.commands.push(...param)
    } else {
      this.commands.push(param)
    }
    return this
  }

  public deleteCommand(i: number): this {
    this.commands.splice(i, 1)
    return this
  }

  public getCommandString(): string {
    return (
      this.commands
        ?.map((com: Command, _i: number) => com.toString())
        .join(' ')
        .trim() || ''
    )
  }

  public toJson(): PathObject {
    return {
      key: this.key,
      type: 'path',
      attributes: {
        ...this.attrs,
        d: this.getCommandString(),
      },
    }
  }

  public setAttributes(attrs: PathAttributes) {
    this.attrs = attrs
  }

  public updateAttributes(attrs: PathAttributes) {
    this.attrs = {
      ...this.attrs,
      ...attrs,
    }
  }

  public translate(po: PointObject): void {
    for (let i = 0; i < this.commands.length; i += 1) {
      this.commands[i].translate(po)
    }
  }

  public clone(): Path {
    return new Path(
      {
        ...this.attrs,
      },
      this.key
    ).addCommand(this.commands.map((c) => c.clone()))
  }
}

export const toRelativePath = (path: Path): Path => {
  let basePoint = path.commands[0].point
  const upd = path.clone()
  upd.commands = [path.commands[0]]

  for (let i = 1; i < path.commands.length; i += 1) {
    const command = path.commands[i]

    const notAbsoluteCommand =
      basePoint && isAbsoluteCommand(command)
        ? toRelativeCommand(command, basePoint)
        : command.clone()

    basePoint = isAbsoluteCommand(command)
      ? command.point // Absolute point
      : basePoint && command.point
      ? basePoint.add(command.point) // Relative point
      : undefined // Close

    upd.addCommand(notAbsoluteCommand)
  }

  return upd
}

export const toAbsolutePath = (path: Path): Path => {
  let basePoint = path.commands[0].point
  const upd = path.clone()
  upd.commands = [path.commands[0]]

  for (let i = 1; i < path.commands.length; i += 1) {
    const command = path.commands[i]

    const notRelativeCommand =
      basePoint && isRelativeCommand(command)
        ? toAbsoluteCommand(command, basePoint)
        : command.clone()

    basePoint = isAbsoluteCommand(command)
      ? command.point // Absolute point
      : basePoint && command.point
      ? basePoint.add(command.point) // Relative point
      : undefined // Close

    upd.addCommand(notRelativeCommand)
  }

  return upd
}
