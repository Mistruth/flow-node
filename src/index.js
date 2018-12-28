import flowDrag from './components/flow-node-drag.vue'

const install = (Vue) => {
  /* eslint no-param-reassign: 0 */
  Vue.component(flowDrag.name, flowDrag)
}

/* eslint no-undef:0 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
