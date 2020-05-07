// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "@supermap/iclient-openlayers";

import './assets/js/in-element-ui'
import './assets/js/in-utils'
import './assets/style/r.css'
import './assets/style/re-element-ui.scss'
import './assets/style/c.css'
import './assets/style/mapbox.css'
import './assets/style/s.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
