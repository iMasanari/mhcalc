import typescript from 'rollup-plugin-typescript'
import css from 'rollup-plugin-css-only'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from "rollup-plugin-replace"
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import fs from 'fs'
import CleanCSS from 'clean-css'
import tsc from 'typescript'

const isProduction = process.env.NODE_ENV === 'production'
const dest = './app/dest'

const minifyCss = (styles, styleNodes) => {
  fs.writeFileSync(`${dest}/bundle.css`, new CleanCSS().minify(styles).styles)
}

const plugins = [
  typescript({ typescript: tsc }),
  css({ output: isProduction ? minifyCss : `${dest}/bundle.css` }),
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
  dest: `${dest}/bundle.js`,
  format: 'iife',
  context: 'this',
  sourceMap: !isProduction,
  plugins: isProduction ? prodPlugins : plugins,
}
