import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import '@/plugin/zTree/jquery.ztree.core.min'
import '@/plugin/zTree/jquery.ztree.excheck.min'
import { store } from './store'
// import 'element-ui/lib/theme-chalk/index.css';
// import { Button, Upload } from 'element-ui'
import vMessage from '@/page/demo13/extend/index.js'
import '@/page/demo16/eventBus'
// import {sync} from 'vuex-router-sync'
import ELEMENT from 'element-ui'
// sync(store, router)
Vue.use(ELEMENT)

// import echarts from 'echarts' //引入echarts
// import "echarts/lib/component/title";
// import "echarts/lib/component/title";
// import 
// import echarts from '../public/echarts.min.js'

// 引入折线图等组件
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/bar')
// require('echarts/lib/chart/radar')

// 引入提示框和title组件，图例
//    toolbox grid 
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/toolbox')
// require('echarts/lib/component/legend')
// require('echarts/lib/component/grid')

// Vue.prototype.$echarts = echarts

import VueQuillEditor from 'vue-quill-editor'
// import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// Vue.prototype.$echarts = echarts //引入组件
Vue.use(vMessage)
// Vue.use(echarts)
Vue.use(VueQuillEditor)
// import { mixinTest1 } from '@/until/mixins'
// Vue.use(Button)
//   .use(Upload)
// Vue.mixin(mixinTest1) // 全局混入
Vue.config.productionTip = false
// Vue.prototype.$ = $
// })
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
