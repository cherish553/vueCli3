
import demo1 from '@/page/demo1/index.vue'
import demo2 from './modules/demo2'

let router = [
    {
        path: '/',
        name: 'demo1',
        component: demo1
    },
    demo2
]
export default router