<template>
    <div>
        <keep-alive include="child">
        <component :is='name'/>
        </keep-alive>
        <el-button @click="change">change</el-button>
    </div>
</template>
<script>
import child from './child'
import child2 from './child2'
import {getData}from '@/api'
export default {
    async created(){
        console.log(process)
        console.log(111111111111)
        // console.log(await getData())
    },
    components:{
        child,
        child2
    },
    data(){
        return{
          name:'child'
        }
    },
    methods:{
        change(){
            this.name==='child'?this.name='child2':this.name='child'
        }
    }
}
</script>