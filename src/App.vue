<template>
  <div id="app">
    <div id="nav">
      <el-button size="small" type="warning" @click="jump('demo1')">demo1</el-button>|
      <el-button size="small" type="warning" @click="jump('demo2')">demo2</el-button>|
      <el-button size="small" type="warning" @click="jump('demo3')">demo3</el-button>|
      <el-button size="small" type="warning" @click="jump('demo4')">demo4</el-button>|
      <el-button size="small" type="warning" @click="jump('demo5')">demo5</el-button>|
      <el-button size="small" type="warning" @click="jump('demo6')">demo6</el-button>|
      <el-button size="small" type="warning" @click="jump('demo7')">demo7</el-button>|
      <el-button size="small" type="warning" @click="jump('demo8')">demo8</el-button>|
      <el-button size="small" type="warning" @click="jump('demo9')">demo9</el-button>|
      <el-button size="small" type="warning" @click="jump('demo10')">demo10</el-button>|
      <el-button size="small" type="warning" @click="jump('demo11')">demo11</el-button>|
      <el-button size="small" type="warning" @click="jump('demo12')">demo12</el-button>|
      <el-button size="small" type="warning" @click="jump('demo13')">demo13</el-button>|
      <el-button size="small" type="warning" @click="jump('demo14')">demo14</el-button>|
      <el-button size="small" type="warning" @click="jump('demo15')">demo15</el-button>|
      <el-button size="small" type="warning" @click="jump('demo16')">demo16</el-button>|
      <el-button size="small" type="warning" @click="jump('demo17')">demo17</el-button>|
      <el-button size="small" type="warning" @click="jump('demo18')">demo18</el-button>|
      <el-button size="small" type="warning" @click="jump('demo19')">demo19</el-button>|
      <el-button size="small" type="warning" @click="jump('demo20')">demo20</el-button>|
      <el-button size="small" type="warning" @click="jump('demo21')">demo21</el-button>|
      <el-button size="small" type="warning" @click="jump('demo22')">demo22</el-button>|
      <el-button size="small" type="warning" @click="jump('demo23')">demo23</el-button>|
      <el-button size="small" type="warning" @click="jump('demo24')">demo24</el-button>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style>
@import "./assets/iconfont.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
