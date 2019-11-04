<template>
  <div style="width:100%">
    <MarkDown @on-save='save' v-model="data"/>
    <!-- <el-button @click="getInner">点击获取内容</el-button> -->
  </div>
</template>
<script>
import MarkDown from 'vue-meditor'
export default {
  components: {
    MarkDown 
  },
  data(){
      return{
          data: ''
          }
  },
  methods:{
    save(e){
      console.log(this.data)
      console.log(e)
    }
  }

};
</script>