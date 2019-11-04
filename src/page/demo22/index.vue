<template>
  <div>
    {{data}}
    <child />
  </div>
</template>
<script>
import child from "./child";
export default {
  components: {
    child
  },
  data() {
    return {
      data: '我是父组件的数据'
    };
  },
  provide() {
    return {
      sss: "我是父组件provide的数据", // 传递可响应对象
      that: this
    };
  }
};
</script>