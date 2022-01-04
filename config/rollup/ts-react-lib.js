import build from './build'

export default build({
  getBabelOptions: ({ esm, extensions, targets }) => ({
    extensions,
    babelrc: false,
    exclude: '**/node_modules/**',
    runtimeHelpers: true,
    presets: [
      [
        '@babel/preset-env',
        {
          targets,
          loose: true,
          modules: false,
        },
      ],
      ['@babel/preset-react', { useBuiltIns: true }],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['transform-react-remove-prop-types', { removeImport: true }],
      // TODO: optimize bundle size
      // 'babel-plugin-annotate-pure-calls',
      [
        '@babel/plugin-transform-runtime',
        { useESModules: esm, regenerator: true },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      ['@babel/plugin-proposal-private-methods', { loose: false }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    ],
  }),
  globals: {
    react: 'React',
  },
})
