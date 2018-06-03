// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'jquery/dist/jquery.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
// import 'bootstrap-material-design/dist/css/ripples.css'
// import 'bootstrap-material-design/dist/js/material.js'
import CustomVueScrollReveal from '@/assets/js/custom_scrollreveal.js'
const VueScrollTo = require('vue-scrollto')
import Scrollspy from 'vue2-scrollspy'

Vue.use(CustomVueScrollReveal)
Vue.use(VueScrollTo)
Vue.use(Scrollspy)

Vue.config.productionTip = false
/* eslint-disable */
// $.material.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
