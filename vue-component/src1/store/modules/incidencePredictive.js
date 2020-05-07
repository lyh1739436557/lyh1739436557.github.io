import {
  hpfj110GetBy24Future, hpWeatherGetWeatherDaily, hpfj110GetByMonth, hpfj110GetStereo,
  cntTypeFullPredGet3dFuture, cntTypeFullPredGetOffice, ProlygonLayerData
} from '../api/incidencePredictive'

const state = {
  selectTime: {
    startInt: (new Date()).getHours()+1,
    endInt:  (new Date()).getHours()+2
  },
  polygonLayer: [],
  chooseLayer: 1
}
const getters = {}
const mutations = {
  prolygonLayerDataChange (state, params) {
    state.polygonLayer = params
  },
  prolygonTimeSelect (state, params) {
    state.selectTime = params
  },
  prolygonLayer (state, params) {
    state.chooseLayer = params
  }
}
const actions = {
  prolygonLayerDataChange (context, params) {
    context.commit('prolygonLayerDataChange', params)
  },

  prolygonTimeSelect (context, params) {
    context.commit('prolygonTimeSelect', params)
  },

  prolygonLayer (context, params) {
    context.commit('prolygonLayer', params)
  },

  prolygonLayerData({ commit }, params) {
    return ProlygonLayerData(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxHpfj110GetBy24Future({ commit }, params) {
    return hpfj110GetBy24Future(params).then(res => {
      // console.log(res)
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxHpWeatherGetWeatherDaily({ commit }, params) {
    return hpWeatherGetWeatherDaily(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxHpfj110GetByMonth({ commit }, params) {
    return hpfj110GetByMonth(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxHpfj110GetStereo({ commit }, params) {
    return hpfj110GetStereo(params).then(res => {
      // console.log(res)
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxCntTypeFullPredGet3dFuture({ commit }, params) {
    return cntTypeFullPredGet3dFuture(params).then(res => {
      // console.log(res)
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  ajaxCntTypeFullPredGetOffice({ commit }, params) {
    return cntTypeFullPredGetOffice(params).then(res => {
      // console.log(res)
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
