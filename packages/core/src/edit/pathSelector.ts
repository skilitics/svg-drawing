import type {
  SelectIndex,
  SelectPathIndex,
  SelectCommandIndex,
  SelectPointIndex,
  Selecting,
} from '../types'

const convertSelectingFromIndex = (index: SelectIndex): Selecting => ({
  [index.path]:
    typeof index.command === 'number'
      ? {
          [index.command]: typeof index.point === 'number' ? [index.point] : [],
        }
      : {},
})

const isSelectPathIndex = (index: SelectIndex): index is SelectPathIndex =>
  !!(
    index.path &&
    typeof index.command !== 'number' &&
    typeof index.point !== 'number'
  )

const isSelectCommandIndex = (
  index: SelectIndex
): index is SelectCommandIndex =>
  !!(
    index.path &&
    typeof index.command === 'number' &&
    typeof index.point !== 'number'
  )

const isSelectPointIndex = (index: SelectIndex): index is SelectPointIndex =>
  !!(
    index.path &&
    typeof index.command === 'number' &&
    typeof index.point === 'number'
  )

const isObjectEmpty = (obj: object): obj is Record<any, never> =>
  Object.keys(obj).length === 0

export class PathSelector {
  private selecting: Selecting = {}

  get selectedPathsOnly(): boolean {
    return (
      this.selected &&
      Object.keys(this.selecting).every(
        (key: string) =>
          this.selecting && Object.keys(this.selecting[key]).length === 0
      )
    )
  }

  get selected(): boolean {
    return !isObjectEmpty(this.selecting)
  }

  get pathsIndex(): string[] {
    return Object.keys(this.selecting)
  }

  getCommandsIndex(pathKey: string): number[] | undefined {
    const selectingCommands = this.selecting[pathKey]

    return selectingCommands && !isObjectEmpty(selectingCommands)
      ? Object.keys(selectingCommands).map(Number)
      : undefined
  }

  getPointsIndex(pathKey: string, commandKey: number): number[] | undefined {
    const selectingPoints = this.selecting[pathKey]?.[commandKey]

    return selectingPoints && !isObjectEmpty(selectingPoints)
      ? selectingPoints
      : undefined
  }

  clear() {
    this.selecting = {}
  }

  select(index: SelectIndex) {
    this.selecting = convertSelectingFromIndex(index)
  }

  /** @todo Currently only path index is supported. Changed to merge deeply. */
  selectMerge(index: SelectIndex) {
    this.selecting = {
      ...this.selecting,
      ...convertSelectingFromIndex(index),
    }
  }

  unselect(index: SelectIndex) {
    if (!this.selecting) return

    const { [index.path]: unselectedPath, ...updateSelecting } = this.selecting

    if (!unselectedPath) return
    if (isSelectPathIndex(index)) {
      this.selecting = updateSelecting
      return
    }

    const { [index.command]: unselectedCommand, ...updateCommandSelecting } =
      unselectedPath

    if (!unselectedCommand) return
    if (isSelectCommandIndex(index)) {
      this.selecting = {
        ...this.selecting,
        [index.path]: updateCommandSelecting,
      }
      return
    }

    if (isSelectPointIndex(index)) {
      this.selecting = {
        ...this.selecting,
        [index.path]: {
          ...this.selecting[index.path],
          [index.command]: unselectedCommand.filter(
            (pointIndex) => pointIndex !== index.point
          ),
        },
      }
    }
  }

  toJson(): Selecting {
    return this.selecting
  }
}
