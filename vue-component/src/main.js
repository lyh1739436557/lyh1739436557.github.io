import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.scss'
import './assets/css/global.scss'
// import './assets/css/mapbox.css'
// import FyCom from './components/index'
// import "@supermap/iclient-mapboxgl"
Vue.use(ElementUI);
// Vue.use(FyCom);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
