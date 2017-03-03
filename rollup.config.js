import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import tsc from 'typescript'

const isProduction = process.env.NODE_ENV === "production"

const plugins = [
  typescript({ typescript: tsc }),
  nodeResolve({ jsnext: true }),
]

const prodPlugins = [
  ...plugins,
  buble(),
  uglify(),
]

export default {
  entry: './src/index.tsx',
  dest: './scripts/bundle.js',
  format: 'iife',
  sourceMap: !isProduction,
  plugins:  isProduction ? prodPlugins : plugins,
}