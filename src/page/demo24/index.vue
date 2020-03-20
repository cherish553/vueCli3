<template>
  <div class="height2000">
    <h1>自定义指令</h1>
    <div class="custom" v-auth="auth"></div>
  </div>
</template>
<script>
export default {
  name: "keep",
  data() {
    return {
      auth: false
    };
  },
  directives: {
    // auth(el, binding, vnode) {
    //   if (binding.value) return;
    //   el.classList.add("none");
    // }
    auth:{
      bind(el,value,vnode){
        console.log('bind')
        // console.log(el)
        // console.log(value)
        // console.log(vnode)
      },
      inserted(el,value,vnode){
        console.log('inserted')
        // console.log(data)
      },

    }
  }
};
</script>
<style>
.custom {
  margin: auto;
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
.none {
  display: none;
}
</style>
