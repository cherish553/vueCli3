<template>
    <div>
   {{names}}
   <template v-if="item.children">
   <child/>
   </template>
    </div>
</template>
<script>
export default {
    name:'child',
    data(){
        return {
            names:'我是子组件的数据'
        }
    },
    created(){
        console.log('我是子组件的数据')
    }
}
</script>