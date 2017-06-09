import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from "rollup-plugin-replace"
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import tsc from 'typescript'

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  typescript({ typescript: tsc }),
  nodeResolve({ jsnext: true }),
  replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
]

const prodPlugins = [
  ...plugins,
  buble(),
  uglify(),
]

export default {
  entry: './src/index.tsx',
  dest: './app/dest/bundle.js',
  format: 'iife',
  context: 'this',
  sourceMap: !isProduction,
  plugins: isProduction ? prodPlugins : plugins,
}
