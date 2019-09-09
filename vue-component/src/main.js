import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapBoxGl from 'mapbox-gl'
Vue.prototype.mbgl = mapBoxGl

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
