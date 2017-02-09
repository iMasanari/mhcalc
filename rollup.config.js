import typescript from 'rollup-plugin-typescript'
import tsc from 'typescript'

export default {
  entry: './src/index.tsx',
  dest: './scripts/bundle.js',
  format: 'iife',
  plugins: [
    typescript({ typescript: tsc })
  ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  external: ['react', 'react-dom', 'whatwg-fetch']
}