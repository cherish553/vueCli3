<template>
    <div>
   {{names}}
    </div>
</template>
<script>
export default {
    name:'child2',
    data(){
        return {
            names:'我是子组件2的数据'
        }
    },
    created(){
        console.log('我是子组件2的数据')
    }
}
</script>