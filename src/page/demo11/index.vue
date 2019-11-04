<template>
  <div>
    <h1>prop传值问题</h1>
    <children :value='value'/>
    <el-button @click="value++">点击增加数字</el-button>
  </div>
</template>
<script>
import children from './components'
export default {
  data() {
    return {
      value:1
    };
  },
  components:{
    children
  }
};
</script>