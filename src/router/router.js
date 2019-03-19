
import Home from '@/views/Home.vue'
import about from './modules/about.js'

let router = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    about
]
export default router