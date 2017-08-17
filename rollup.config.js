// @ts-check

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
const dest = './public/dest'

/** @param {string} path */
const minifyCss = (path) =>
  (styles, styleNodes) => {
    fs.writeFileSync(path, new CleanCSS().minify(styles).styles)
  }

/** @type {tsc.CompilerOptions | { typescript: typeof tsc }} */
const compilerOptions = {
  typescript: tsc,
  importHelpers: true,
  noEmitHelpers: true
}

const plugins = [
  typescript(compilerOptions),
  css({ output: isProduction ? minifyCss(`${dest}/bundle.css`) : `${dest}/bundle.css` }),
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
  sourceMap: isProduction ? false : 'inline',
  plugins: isProduction ? prodPlugins : plugins,
}
