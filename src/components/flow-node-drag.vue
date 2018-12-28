<template>
  <div
    :draggable="draggable"
    :class="getFlowDragClass()"
    @dragstart.stop="handleDragStart"
    @drag.stop="handleDragMove"
  >
    <slot />
  </div>
</template>

<script>
// import { setStyle } from '../utlis/index.js'
export default {
  name: 'FlowDrag',
  props: {
    // 是否可以拖动
    draggable: {
      type: Boolean,
      default: true
    },
    // 是否会回去
    back: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    getFlowDragClass() {
      return ['flow-node-drag']
    },
    init() {

    },
    handleDragStart(e) {
      // console.log(e)
    },
    handleDragMove(e) {
      console.log(e)
      // const { x, y } = e
    }
  }
}
</script>

<style lang="less">
.flow-node-drag {
  position: absolute;
  cursor: move;
  display: inline-block;
}
</style>
