<template>
  <div class="demo2">
    <h1>vuex用法</h1>
    <child>
      <template slot-scope="scope">
        <div class="tmpl">
          {{scope}}</span>
        </div>
      </template>
    </child>

  </div>
</template>

<script>
import child from'./children/childOne'
export default {
  components:{child},
  data(){
    return{

    }
  },
  methods:{
    jump(){
      this.$router.push({name:'demo2-1'})
    }
  }
}
</script>

