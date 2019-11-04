<template>
  <div>
    <h1>rem的使用</h1>
    <div class="px">你好</div>
    <div class="rem">你好</div>
    <el-button type="primary" @click="change()">点击改变根部元素的html</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.change()
  },
  methods: {
    change() {
      // 14随便写 1rem === fontsize
      document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 14 + "px"
    }
  }
};
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
// 1rem= 26.7857px
.rems(@x,@y){
     @{y}: unit(@x /  26.7857, rem);
}

.height {
  height: 50px;
}
.px {
  background-color: skyblue;
  .height();
  width: 50%;
  // font-size: 14px;
}
.rem {
  background-color: greenyellow;
  .height();
  .rems(375/2,width);
  .rems(14,font-size)
  // width: 50%
}
</style>