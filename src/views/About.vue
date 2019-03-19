<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="jump">来呀点我</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    jump(){
      this.$router.push({name:'about-demo'})
    }
  }
}
</script>

