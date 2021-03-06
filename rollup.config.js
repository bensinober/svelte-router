const pkg = require('./package.json')

module.exports = {
  input: './src/index.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'SvelteRouter'
  },
  context: 'window',
  plugins: [
    require('rollup-plugin-eslint')({
      include: './src/**/*.js'
    }),
    require('rollup-plugin-svelte')({
      store: true
    }),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    }),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-replace')({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    require('rollup-plugin-uglify')()
  ]
}
