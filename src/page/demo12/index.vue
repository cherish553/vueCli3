<template>
    <div>
        <h1>Mixins</h1>
       {{cherish}}
    </div>
</template>
<script>
import {mixinTest1} from '@/until/mixins'
export default {
    mixins:[mixinTest1],
    created(){
        if(this.chage) this.chage()
        console.log('created')
    },
    methods:{
        hello(){
            this.cherish='cherishsss'
        }
    },
    myoption:{
        hello(){
            console.log(123)
        }
    }
}
</script>