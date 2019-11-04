<template>
  <div>
    {{sss}}
    <el-button @click="change">点击</el-button>
  </div>
</template>
<script>
export default {
  inject: ["sss", "that"],
  created() {},
  methods: {
    change() {
        console.log(this.that)
      this.that.data = "我是通过注入的this改变父组件的数据";
    }
  }
};
</script>