<template>
  <div>
    <h1>component组件&nextTick</h1>
    <el-button @click="change" type="danger">点击切换组件</el-button>
    <br>
    <br>
    <br>
    <br>
    <keep-alive>
      <component :is="name" :ref="name"></component>
    </keep-alive>
  </div>
</template>
<script>
import one from "./components/one";
import two from "./components/two";
export default {
  components: { one, two },
  data() {
    return {
      name: "one"
    };
  },
  methods: {
    async change() {
      switch (this.name) {
        case "one":
          this.name = "two";
          await this.$nextTick();
          this.$refs.two.name = "cherish two";
          break;
        case "two":
          this.name = "one";
          await this.$nextTick();
          this.$refs.one.name = "cherish one";
          break;
      }
    }
  }
};
</script>