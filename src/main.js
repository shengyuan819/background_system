// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 实例化store
import store from './store/store'

// 引入Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入md5加密
import md5 from 'js-md5'
Vue.prototype.$md5 = md5

// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 封装函数
import {message,postRequest} from './assets/js/http.js'
Vue.prototype.message = message
Vue.prototype.postRequest = postRequest
import {Base64} from './assets/js/base64.js'
Vue.prototype.Base64 = Base64
// 封装函数

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
