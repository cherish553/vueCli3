<template>
  <div>
    <h2>我是组件1</h2>
    <el-button @click="decrease()">-</el-button>
  </div>
</template>
<script>
import { EventBus } from "../eventBus.js"
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    decrease() {
      EventBus.$emit("decreased", {
        num: this.num
      })
    }
  }
}
</script>