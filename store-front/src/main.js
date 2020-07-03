// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueAxios from 'vue-axios'
import App from './App'
import router from './router'
import { plainAxiosInstance, securedAxiosInstance } from './backend/axios'
import './main.css' // tailwind

Vue.config.productionTip = false
Vue.use(vueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  components: { App },
  template: '<App/>'
})
