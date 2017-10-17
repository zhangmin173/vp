// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import http from '@/utils/http'
import api from '@/utils/api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Layout from '@/pages/layout'

Vue.use(ElementUI)
Vue.config.productionTip = true
Vue.prototype.$http = http
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {
    Layout
  }
})
