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

  targets:[
    {format:'cjs',dest:`dist/${pack.name}${desc}.common.js`}
  ],

  plugins:[
    vue(VueConfig),
    buble()
  ],

  watch: {
    exclude: 'node_modules/**'
  },

  cache:true,

  sourcemap:false

}

export default config

