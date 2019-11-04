export const mixinTest1 = {
    data() {
        return {
            cherish: ''
        }
    },
    created() {
        console.log('mixins')
        this.hello()
    },
    methods: {
        hello() {
            this.cherish='cherish'
        }
    },
    myoption:{
        hello(){
            console.log(444444)
        }
    }
}