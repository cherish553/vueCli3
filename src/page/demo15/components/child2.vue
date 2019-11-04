<template>
  <div>
    <h2>我是组件2</h2>
    <el-button @click="increment()">+</el-button>
  </div>
</template>
<script>
import { EventBus } from "../eventBus"
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    increment() {
      EventBus.$emit("incremented", {
        num: this.num
      })
    }
  }
}
</script>