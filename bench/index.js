/* eslint-disable @typescript-eslint/no-var-requires */
const Benchmark = require('benchmark')
const { Svg, COMMAND_TYPE, Command, Path } = require('@svg-drawing/core')
const suite = new Benchmark.Suite()

suite
  .add('Svg clas', () => {
    const svg = new Svg({ width: 500, height: 500 })
      // TODO: rewrite bezier curve test
      .addPath(
        new Path()
          .addCommand(new Command(COMMAND_TYPE.MOVE, [0, 0]))
          .addCommand(
            new Command(COMMAND_TYPE.CURVE, [0.2, 0.2, 0.6, 0.8, 1, 1])
          )
          .addCommand(
            new Command(COMMAND_TYPE.CURVE, [1.4, 1.2, 1.6, 1.2, 2, 1])
          )
          .addCommand(
            new Command(COMMAND_TYPE.CURVE, [2.4, 0.8, 2.8, 0.2, 3, 0])
          )
      )
      .addPath(
        new Path({
          strokeLinecap: 'square',
          strokeLinejoin: 'mitter',
        })
          .addCommand(new Command(COMMAND_TYPE.MOVE, [4, 4]))
          .addCommand(new Command(COMMAND_TYPE.LINE, [9, 4]))
          .addCommand(new Command(COMMAND_TYPE.LINE, [9, 8]))
          .addCommand(new Command(COMMAND_TYPE.LINE, [3, 0]))
          .addCommand(new Command(COMMAND_TYPE.CLOSE))
      )
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .run()
