import Vue from 'vue'
import Router from 'vue-router'
import home from './module/home' // 功能模块
import sign from './module/sign' // 用户登录
import incidence from './module/incidence' // 发案模块
import log from './module/log' // 日志模块
import system from './module/system' // 系统设置模块

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'alertSituationAnalysis'
      },
      meta: {
        moduleName: [ '首页' ]
      },
      component: () => <router-view />
    },
    home,
    incidence,
    log,
    system,
    sign
  ]
})
