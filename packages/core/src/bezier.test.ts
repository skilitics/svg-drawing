import { BezierCurve } from './bezier'
import { Point } from './svg'

describe('bezier.ts', () => {
  describe('BezierCurve', () => {
    it('createCurve', () => {
      const bezier = new BezierCurve({ ratio: 0.2 })
      expect(
        bezier
          .createCurve(
            new Point(0, 0),
            new Point(1, 1),
            new Point(2, 1),
            new Point(3, 0)
          )
          .toString()
      ).toBe('C 1.4 1.2 1.6 1.2 2 1')
    })

    it('createCurveRelative', () => {
      const bezier = new BezierCurve({ ratio: 0.2 })
      expect(
        bezier
          .createCurveRelative(
            new Point(0, 0),
            new Point(1, 1),
            new Point(1, 0),
            new Point(1, -1)
          )
          .toString()
      ).toBe('c 0.4 0.2 0.6 0.2 1 0')
    })
  })
})
