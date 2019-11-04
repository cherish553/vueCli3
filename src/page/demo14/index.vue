<template>
  <div>
    <h1>computed的setter和getter
      <div>123
        <div></div>
        </div>
    </h1>
    <el-button class="da" type="primary" @click="numbers++">点击我改变计算属性，触发setter</el-button>
    <div class="da">{number}}</div>
    <div>{{string}}</div>
    <input type="tel" v-model='asd' @input="change" >
  </div>
</template>
<script>
import {getData} from '@/api'
export default {
  data() {
    return {
      asd:1,
      number: 111,
      string: "我是原始的number"
    };
  },
  created() {
    this.getData();
  },
  computed: {
    numbers: {
      get() {
        return this.number;
      },
      set(newValue) {
        this.number = "我是经过了计算属性set的number";
        this.string = "我是经过了计算属性set的string";
      }
    }
  },
  methods: {
    change(e){
      console.log(e.target.value)
      console.log(e)
      // let number=e.target.value
      // number=number.replace(/\D/g,'')
      // this.asd=number
      // console.log(number)
      // if(parseFloat(e.target.value)&&parseFloat(e.target.value)<0||!e.target.value)
      // this.asd=0
    },
    async getData() {
      console.log(await getData())
    }
  }
};
</script>
<style scoped>
  .el-button--primary>span{
    color: red!important;
  }
  /* {
    background-color: red;
  } */
</style>