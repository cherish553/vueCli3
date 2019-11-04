<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  data() {
    return {
      name: "one"
    };
  },
  created() {
    console.log("组件one创建");
  },
  destroyed() {
    console.log("组件one销毁");
  },
};
</script>