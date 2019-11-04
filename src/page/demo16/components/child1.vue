<template>
  <div>
    <h2>我是a组件</h2>
    <el-button type="primary" @click="emit">点击通过全局eventBus触发事件</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    emit() {
      this.$bus.$emit("nameOfEvent", { name: 1 });
    }
  },
  props:{
    data:{
      type:Boolean,
      default:false
    }
  },
  created(){
    console.log(this.data)
  }
};
</script>