<template>
  <div class="l-drawer-left-warning-prediction single-bg flex-row">
    <template v-for="(item, index) in predictList">
      <div class="l-drawer-left-warning-prediction-left inline-center flex-shrink" :key="index">
        <h4>{{ item.text }}警情预测数</h4>
        <img src="../../../assets/svg/card_warningprediction.svg" class="left-icon" />
        <div class="">
          <span class="gradient-number">{{ item.value }}</span>
          <span style="color: #3F454B;">起</span>
        </div>
    </div>
    </template>
    <div class="l-drawer-left-warning-prediction-right flex-1">
      <div class="flex-row justify-around">
        <div v-for="(weather, index) in weatherList" :key="index" class="flex-1 right-item inline-center">
          <div class="days">{{ weather.days }}</div>
          <div class="nick-days">{{ weather.nickDays }}</div>
          <div class="weather-status">{{ weather.status }}</div>
          <!-- <div><i class="weather-icon el-icon-sunny"></i></div> -->
        </div>
      </div>
      <div class="echarts-box">
        <draw-echarts :data="echartsDta" target="incidence-predictive-drawer-left-warning-prediction-weather"></draw-echarts>
      </div>
    </div>
  </div>
</template>

<script>
import { drawEcharts } from '@/components'
export default {
  name: 'ldrawerLeftWarningPrediction',
  components: {
    drawEcharts
  },
  data () {
    return {
      predictList: [],
      weatherList: [],
      echartsDta: {
        x: [], y1: [], y2: []
      }
    }
  },
  mounted () {
    this.ajaxCntTypeFullPredGet3dFuture()
    this.ajaxHpWeatherGetWeatherDaily()
  },
  methods: {
    ajaxCntTypeFullPredGet3dFuture () {
      this.$store.dispatch('ajaxCntTypeFullPredGet3dFuture').then(res => {
        if (res && res.data instanceof Array) {
          this.predictList = res.data.map(curr => {
            return {
              text: curr.day,
              value: curr.eventCnt,
              time: curr.eventDate
            }
          })
        }
      })
    },
    ajaxHpWeatherGetWeatherDaily () {
      this.$store.dispatch('ajaxHpWeatherGetWeatherDaily').then(res => {
        console.log(res)
        if (res && res.data instanceof Array) {
          this.weatherList = res.data.map(curr => {
            return {
              days: curr.daily || '-',
              nickDays: curr.weekDay || '-',
              status: curr.skyconDesc || '-'
            }
          })
          this.echartsDta = {
            x: res.data.map(curr => curr.daily),
            y1: res.data.map(curr => parseFloat(curr.temperatureMin) === NaN ? 0 : parseFloat(curr.temperatureMin)),
            y2: res.data.map(curr => parseFloat(curr.temperatureMax) === NaN ? 0 : parseFloat(curr.temperatureMax))
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-warning-prediction {
  height: 100%;
  position: relative;
  &-left {
    width: 135px;
    margin: 20px 0;
    border-right: 1px solid #D8D8D8;
    .left-icon {
      width: fit-content;
      margin: 20px auto;
    }
  }
  &-right {
    margin: 20px 24px;
    overflow: hidden;
    .right-item {
      font-size: 12px;
      max-width: 45px;
      .days {
        line-height: 22px;
        color: #1D2023;
      }
      .nick-days {
        line-height: 22px;
        color: #8B9198;
      }
      .weather-status {
        line-height: 18px;
        color: #8B9198;
      }
      .weather-icon {
        font-size: 20px;
        color: #3E82F6;
      }
    }
  }
  &:before {
    content: '';
    width: 68px;
    height: 31px;
    background-image: url(../../../assets/svg/card_prediction_1.svg);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:after {
    content: '';
    width: 46px;
    height: 17px;
    background-image: url(../../../assets/svg/card_prediction_2.svg);
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
