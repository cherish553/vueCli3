<template>
  <div>
<h1>阿里图标库引用</h1>
  <i class='iconfont icon-buhege'>
  </i>
    
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created(){
      console.log(process.env.VUE_APP_TITLE)
      console.log(process.env.BASE_URL)
  }
};
</script>
