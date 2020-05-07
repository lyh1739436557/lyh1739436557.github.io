import {
  faycSsjqListGetList,
  tSjdGetNowJq,
  tSjdGetYearJq,
  tSjdGetDwCaseSum,
  getMapData,
  hpfj110Get110Jq,
  hpWeatherGetWeather,
  faycJqfxJqsGetList,
  faycJqfx24hourjqGetList,
  hpfj110GetAllPillar,
  hp110SadianGetJqClass
} from '../api/alertSituationAnalysis'

const state = {
  chooseLayer: 1,
  layerData: [],
  selectTime: {
    startTime: '',
    endTime: ''
  },
  selectArea: {
    officeName: ''
  },
  chooseAggregationLayer: 0, //聚合点击了那个图层
  selectType: {
    aymc: ''
  }
}
const getters = {
  //
}
const mutations = {
  chooseLayerIndex (state, params) {
    state.chooseLayer = params
  },
  layerDataChange (state, params) {
    state.layerData = params
  },
  timeSelect (state, params) {
    state.selectTime = params
  },
  chooseAggregationLayer (state, params) {
    state.chooseAggregationLayer = params
  },
  selectArea (state, params) {
    state.selectArea = params
  },
  selectType (state, params) {
    state.selectType = params
  },
}
const actions = {
  chooseLayerIndex (context, params) {
    context.commit('chooseLayerIndex', params)
  },

  layerDataChange (context, params) {
    context.commit('layerDataChange', params)
  },

  timeSelect (context, params) {
    context.commit('timeSelect', params)
  },

  chooseAggregationLayer (context, params) {
    context.commit('chooseAggregationLayer', params)
  },

  selectArea (context, params) {
    context.commit('selectArea', params)
  },

  selectType (context, params) {
    context.commit('selectType', params)
  },

  // 警情分析-实时警情列表
  ajaxFaycSsjqListGetList ({ commit }, params) {
    return faycSsjqListGetList(params).then(res => {
      // console.log(res)
      if (res.code === 200) {
        return res.data
      } else {
        return false
      }
    })
  },
  // 警情分析-今年警情数据分析
  ajaxTSjdGetNowJq ({ commit }, params) {
    return tSjdGetNowJq(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-历史警情分析
  ajaxTSjdGetYearJq ({ commit }, params) {
    return tSjdGetYearJq(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-各机构发案分布
  ajaxTSjdGetDwCaseSum ({ commit }, params) {
    return tSjdGetDwCaseSum(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 地图热力图的数据
  initMapData ({ commit }, params) {
    console.log(params, '1010101010');
    return getMapData(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-今日警情数
  ajaxHpfj110Get110Jq ({ commit }, params) {
    return hpfj110Get110Jq(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-今日天气
  ajaxHpWeatherGetWeather ({ commit }, params) {
    return hpWeatherGetWeather(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-今日，昨日，明日警情数
  ajaxFaycJqfxJqsGetList ({ commit }, params) {
    return faycJqfxJqsGetList(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-24小时发案分布
  ajaxFaycJqfx24hourjqGetList ({ commit }, params) {
    return faycJqfx24hourjqGetList(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 警情分析-警情趋势
  ajaxHpfj110GetAllPillar ({ commit }, params) {
    return hpfj110GetAllPillar(params).then(res => {
      if (res.code === 200) {
        return res
      } else {
        return false
      }
    })
  },
  // 地图筛选-敬请类别下拉
  ajaxHp110SadianGetJqClass ({ commit }, params) {
    return hp110SadianGetJqClass(params).then(res => {
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
