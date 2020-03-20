<template>
  <div class='height2000'>
    <input type="text" v-focus='123'>
  </div>
</template>
<script>
export default {
  name:'keep',
  methods:{
    change(e){
      console.log(123)
    }
  }
}
</script>
<style>
  .height2000{
    height: 3000px;
    background-color: skyblue;
  }
</style>