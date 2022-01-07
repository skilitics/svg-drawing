import { EditPath } from './editPath'
import { Point, toAbsolutePath, toRelativePath } from '../svg'
import type {
  SvgClass,
  PointObject,
  BoundingBox,
  PathAttributes,
  Selecting,
  EditSvgObject,
  ResizeBoundingBoxBase,
  CommandClass,
  PathClass,
  PointClass,
} from '../types'

const fallbackBoundingBox: BoundingBox = {
  min: { x: 0, y: 0 },
  max: { x: 0, y: 0 },
}

const getResizeEditObject = (
  resizeBase: ResizeBoundingBoxBase,
  boundingBox: BoundingBox,
  translatePoint: PointObject
): { scale: PointObject; move: PointObject } => {
  const movePoint = {
    x: translatePoint.x - resizeBase.point.x,
    y: translatePoint.y - resizeBase.point.y,
  }

  const width = boundingBox.max.x - boundingBox.min.x
  const height = boundingBox.max.y - boundingBox.min.y

  switch (resizeBase.fixedType) {
    case 'LeftTop': {
      const scale = {
        x: (width - movePoint.x) / width,
        y: (height - movePoint.y) / height,
      }
      const move = {
        x: -(boundingBox.max.x * scale.x - boundingBox.max.x),
        y: -(boundingBox.max.y * scale.y - boundingBox.max.y),
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
          x: -(boundingBox.min.x * scale.x - boundingBox.min.x),
          y: -(boundingBox.max.y * scale.y - boundingBox.max.y),
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
          x: -(boundingBox.max.x * scale.x - boundingBox.max.x),
          y: -(boundingBox.min.y * scale.y - boundingBox.min.y),
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
          x: -(boundingBox.min.x * scale.x - boundingBox.min.x),
          y: -(boundingBox.min.y * scale.y - boundingBox.min.y),
        },
      }
    }
  }
}

export class EditSvg {
  private selecting: Selecting | null = null
  private translateBasePoint: PointObject | null = null
  private resizeBoundingBoxBase: ResizeBoundingBoxBase | null = null
  constructor(public svg: SvgClass) {}

  public select(sel: Selecting, multipleSelect?: boolean) {
    this.selecting = multipleSelect ? { ...this.selecting, ...sel } : sel
  }

  public cancel() {
    this.selecting = null
  }

  public setupTranslateBsePoint(base: PointObject) {
    this.translateBasePoint = base
  }

  public resetTranslateBsePoint() {
    this.translateBasePoint = null
  }

  public setupResizeBoundingBox(base: ResizeBoundingBoxBase) {
    this.resizeBoundingBoxBase = base
  }

  public resetResizeBoundingBox() {
    this.resizeBoundingBoxBase = null
  }

  public changeAttributes(attrs: PathAttributes) {
    this.exec((path) => {
      path.updateAttributes(attrs)
      return path
    })
  }

  public translate(po: PointObject) {
    const move: PointObject = {
      x: po.x - (this.translateBasePoint?.x ?? 0),
      y: po.y - (this.translateBasePoint?.y ?? 0),
    }

    this.exec(
      (path) => {
        path.translate(move)
        return path
      },
      (command) => {
        command.translate(move)
        return command
      },
      (point) => point.add(new Point(move.x, move.y))
    )
  }

  public scale(r: number) {
    this.exec(
      (path) => path.scale(r),
      (command) => command.scale(r),
      (point) => point.scale(r)
    )
  }

  public scaleX(r: number) {
    this.exec(
      (path) => path.scaleX(r),
      (command) => command.scaleX(r),
      (point) => point.scaleX(r)
    )
  }

  public scaleY(r: number) {
    this.exec(
      (path) => path.scaleY(r),
      (command) => command.scaleY(r),
      (point) => point.scaleY(r)
    )
  }

  public resizeBoundingBox(po: PointObject) {
    if (!this.resizeBoundingBoxBase) return

    const { move, scale } = getResizeEditObject(
      this.resizeBoundingBoxBase,
      this.boundingBox,
      po
    )

    this.exec((path) => {
      path.scaleX(scale.x)
      path.scaleY(scale.y)
      path.translate(move)

      return path
    })
  }

  /** @todo Delete points */
  public delete() {
    const svg = this.generateAbsolutePathSvg()

    for (const pathKey in this.selecting) {
      const selectingCommand = this.selecting[pathKey]

      if (Object.keys(selectingCommand).length === 0) {
        const path = this.svg.paths.find((p) => p.key === pathKey)
        if (path) svg.deletePath(path)
        continue
      }

      for (const commandKey in selectingCommand) {
        svg.paths.find((p) => p.key === pathKey)?.deleteCommand(+commandKey)
      }
    }

    this.svg.paths = svg.paths.map((p) => toRelativePath(p))
  }

  public preview(): EditSvg {
    const preview = new EditSvg(this.svg.clone())
    preview.selecting = this.selecting
    preview.translateBasePoint = this.translateBasePoint
    preview.resizeBoundingBoxBase = this.resizeBoundingBoxBase
    return preview
  }

  public get boundingBox() {
    const listX: number[] = []
    const listY: number[] = []

    this.exec((path) => {
      const editPath = new EditPath(path.clone())

      const {
        boundingBox: {
          min: { x: cMinX, y: cMinY },
          max: { x: cMaxX, y: cMaxY },
        },
      } = editPath
      listX.push(cMinX, cMaxX)
      listY.push(cMinY, cMaxY)

      return path
    })

    return listX.length !== 0 && listY.length !== 0
      ? {
          min: { x: Math.min(...listX), y: Math.min(...listY) },
          max: { x: Math.max(...listX), y: Math.max(...listY) },
        }
      : fallbackBoundingBox
  }

  public toJson(): EditSvgObject | null {
    if (!this.selecting) return null

    const listX: number[] = []
    const listY: number[] = []

    const paths: EditSvgObject['paths'] = {}

    this.exec((path) => {
      const editPath = new EditPath(
        path.clone(),
        this.selecting?.[path.key]
      ).toJson()

      const {
        min: { x: cMinX, y: cMinY },
        max: { x: cMaxX, y: cMaxY },
      } = editPath.boundingBox
      listX.push(cMinX, cMaxX)
      listY.push(cMinY, cMaxY)

      paths[path.key] = editPath

      return path
    })

    const { min, max }: BoundingBox =
      listX.length !== 0 && listY.length !== 0
        ? {
            min: { x: Math.min(...listX), y: Math.min(...listY) },
            max: { x: Math.max(...listX), y: Math.max(...listY) },
          }
        : fallbackBoundingBox

    return {
      index: this.selecting,
      paths,
      boundingBox: {
        x: min.x,
        y: min.y,
        width: max.x - min.x,
        height: max.y - min.y,
        vertex: {
          ['LeftTop']: { x: min.x, y: min.y },
          ['RightTop']: { x: max.x, y: min.y },
          ['RightBottom']: { x: max.x, y: max.y },
          ['LeftBottom']: { x: min.x, y: max.y },
        },
        selected: this.selectedBoundingBox(),
      },
    }
  }

  private selectedBoundingBox(): boolean {
    return !!(
      this.selecting &&
      Object.keys(this.selecting).length > 0 &&
      Object.keys(this.selecting).every(
        (key: string) =>
          this.selecting && Object.keys(this.selecting[key]).length === 0
      )
    )
  }

  private generateAbsolutePathSvg() {
    const svg = this.svg.clone()
    svg.paths = svg.paths.map((p) => toAbsolutePath(p))
    return svg
  }

  private exec(
    pathExec: (path: PathClass) => PathClass,
    commandExec?: (command: CommandClass) => CommandClass,
    pointExec?: (point: PointClass) => PointClass
  ): void {
    const svg = this.generateAbsolutePathSvg()

    for (const pathKey in this.selecting) {
      const pathIndex = svg.paths.findIndex((path) => path.key === pathKey)
      const selectingCommand = this.selecting[pathKey]

      if (!svg.paths[pathIndex]) continue

      if (Object.keys(selectingCommand).length === 0 || !commandExec) {
        svg.paths[pathIndex] = pathExec(svg.paths[pathIndex])
        continue
      }

      for (const commandKey in selectingCommand) {
        const selectingPoint = selectingCommand[+commandKey]
        if (Object.keys(selectingPoint).length === 0 || !pointExec) {
          svg.paths[pathIndex].commands[+commandKey] = commandExec(
            svg.paths[pathIndex].commands[+commandKey]
          )
          continue
        }

        selectingPoint.map((pointKey: number) => {
          svg.paths[pathIndex].commands[+commandKey].points[pointKey] =
            pointExec(
              svg.paths[pathIndex].commands[+commandKey].points[pointKey]
            )
        })
      }
    }

    this.svg.paths = svg.paths.map((p) => toRelativePath(p))
  }
}