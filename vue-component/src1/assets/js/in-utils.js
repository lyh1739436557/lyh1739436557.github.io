/**
 * 针对于没有配置项的&配置项极少的
 * 项目资源引入
 *  */
import Vue from 'vue'
import echarts from 'echarts'
import 'echarts-gl'
import 'animate.css'
import lodash from 'lodash'
// import * as ol from 'ol'

Vue.prototype.$echarts = echarts
// Vue.prototype.ol = ol
Vue.prototype._ = lodash
