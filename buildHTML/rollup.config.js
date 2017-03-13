import replace from 'rollup-plugin-replace'
import typescript from 'rollup-plugin-typescript'
import tsc from 'typescript'

export default {
  entry: './buildHTML/build.tsx',
  dest: './buildHTML/build.js',
  sourceMap: false,
  format: 'cjs',
  plugins: [
    typescript({ typescript: tsc }),
    replace({ 'document.activeElement': null }),
  ],
  external: [ 'preact', 'redux', 'preact-redux', 'fs', 'ejs', 'preact-render-to-string' ]
}
