import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import $ from './until/common'
Vue.config.productionTip = false
Vue.prototype.$ = $
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
