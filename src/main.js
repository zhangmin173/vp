// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = true
import router from '@/router'

import http from '@/utils/http'
import api from '@/utils/api'
Vue.prototype.$http = http
Vue.prototype.$api = api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


import Layout from '@/pages/layout'





// 过滤器
Vue.filter('number', function (value) {
	return parseInt(value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {
    Layout
  }
})
