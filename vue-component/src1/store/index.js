import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import alertSituationAnalysis from './modules/alertSituationAnalysis'
import incidencePredictive from './modules/incidencePredictive'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    alertSituationAnalysis,
    incidencePredictive
  }
})
