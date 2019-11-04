<template>
  <div>
    <h1>this.$set</h1>
    {{obj}}
    <el-button type="primary" @click="change">点击</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        name: "123",
        id: 1
      }
    };
  },
  created() {
    this.obj = {
      name: "333",
      id: 1
    };
  },
  methods: {
    change() {
      this.$set(this.obj, "name", "cherish");
      //   console.log(this.array);
      //   this.array[0].name = "cherish";
    }
  }
};
</script>