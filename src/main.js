// IE10兼容 with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'


import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/core/lazy_use.js'
import './global.less'

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

import {createAxiosInstance} from '@/utils/http'

Vue.prototype.$http = createAxiosInstance()


import './mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
