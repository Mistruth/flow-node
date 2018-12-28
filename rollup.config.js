import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { rollup } from 'rollup';
import VueConfig from './config/rollup-plugin-vue.config'
import { pack } from './config/global.config'

const desc = '.runtime'

const config = {

  entry:'src/index.js',
  
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'MyBundle'
  },

  plugins:[
    vue(VueConfig),
    buble({})
  ],

  targets:[
    { format:'cjs',dest:`dist/${pack.name}${desc}.common.js`},
    { dest: 'dist/flow-node.js', format: 'umd', moduleName:'flow-node' }
  ],

  watch: {
    exclude: 'node_modules/**'
  },

  cache:true

  // sourcemap:false

}

export default config

