<template>
  <div class="l-drawer-left-table-2-row-1">
    <div class="flex-row today">
      <div class="card-item single-bg flex-row alert flex-1">
        <div class="flex-1 alert-left">
          <h4>今日警情数</h4>
          <div class="number-box">
            <span class="gradient-number">{{ todayWarningNumber.today || '-'}}</span>
            <span class="text primary">起</span>
          </div>
        </div>
        <div class="flex-1 alert-right">
          <div class="alert-right-row">
            <span class="text primary">明日预警</span>
            <span class="bold font-16">{{ todayWarningNumber.tomorrow || '-' }}</span>
            <span class="text primary">起</span>
          </div>
          <div class="alert-right-row">
            <span class="text primary">昨日预警</span>
            <span class="bold font-16">{{ todayWarningNumber.yesterday || '-' }}</span>
            <span class="text primary">起</span>
          </div>
        </div>
      </div>
      <div class="card-item single-bg weather flex-1">
        <div class="weather-row week-box">
          <span class="text primary">{{ weatherData.daily }}</span>
          <span><span class="text">{{ weatherData.weekDay }}</span></span>
        </div>
        <div class="weather-row weather-box">
          <!-- <i class="el-icon-sunny"></i> -->
          <span class="temperature">{{ weatherData.temperature + '℃' }}</span>
          <span class="festival">{{ weatherData.holidays }}</span>
        </div>
        <div class="weather-row temperature-box flex-row">
          <div class="text">{{ weatherData.skyconDesc }}</div>
          <div class="text">{{ weatherData.temperatureMin + '~' + weatherData.temperatureMax + '℃' }}</div>
        </div>
      </div>
      <div class="card-item flex-1">
        <draw-echarts :target="'alert-situation-analysis-drawer-left-table2-row1-ring'" :data="ringData"></draw-echarts>
      </div>
    </div>
  </div>
</template>

<script>
import { drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row1',
  components: {
    drawEcharts
  },
  mounted () {
    this.ajaxHpfj110Get110Jq()
    this.ajaxHpWeatherGetWeather()
    this.ajaxFaycJqfxJqsGetList()
  },
  data () {
    return {
      todayWarningNumber: {
        today: 0,
        tomorrow: 0,
        yesterday: 0
      },
      weatherData: {
        daily: '-',
        holidays: '-',
        skyconDesc: '-',
        temperature: '-',
        temperatureMax: '-',
        temperatureMin: '-',
        weekDay: ''
      },
      ringData: [{}]
    }
  },
  methods: {
    // 获取今日警情数
    ajaxHpfj110Get110Jq () {
      this.$store.dispatch('ajaxHpfj110Get110Jq').then(res => {
        // console.log(res)
        if (res && res.data) {
          const { x, y } = res.data
          this.ringData = x.map((curr, index) => {
            return {
              name: curr,
              value: y[index]
            }
          })
        }
      })
    },
    // 获取今日天气
    ajaxHpWeatherGetWeather () {
      this.$store.dispatch('ajaxHpWeatherGetWeather').then(res => {
        // console.log(res)
        if (res && res.data) {
          this.weatherData = {
            daily: res.data.daily || '-', // 几月几日
            holidays: res.data.holidays || '-', // 节日
            skyconDesc: res.data.skyconDesc || '-', // 天气描述
            temperature: res.data.temperature || '-', // 平均温度
            temperatureMax: res.data.temperatureMax || '-', // 最高气温
            temperatureMin: res.data.temperatureMin || '-', // 最低气温
            weekDay: res.data.weekDay || '-' // 星期
          }
        }
      })
    },
    // 获取今日，昨日，明日警情数
    ajaxFaycJqfxJqsGetList () {
      this.$store.dispatch('ajaxFaycJqfxJqsGetList').then(res => {
        // console.log(res)
        if (res && res.data instanceof Array) {
          let temp = {}
          res.data.forEach(curr => {
            temp[curr.mc] = curr.num || 0
          })
          this.todayWarningNumber = temp
        }
      })
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table-2-row-1 {
  .today {
    .card-item {
      flex: 1;
      height: 120px;
      overflow: hidden;
      border-radius: 8px;
      background-color: #ffffff;
      & + .card-item {
        margin-left: 8px;
      }
      &.alert {
        background-image: url(../../../assets/svg/bg_alert_1.svg), url(../../../assets/svg/bg_alert_2.svg);
        background-position: right top, left bottom;
        background-size: contain, auto;
        .alert-left {
          padding: 10px 0 10px 16px;
          .number-box {
            margin-top: 12px;
          }
        }
        .alert-right {
          padding-right: 16px;
          margin: auto 0;
          &-row {
            line-height: 20px;
            & + .alert-right-row {
              margin-top: 10px;
            }
          }
        }
      }
      .text {
        font-size: 14px;
        line-height: 1em;
        color: rgba(63, 69, 75, 0.64);
        & + .text {
          padding-left: 8px;
          margin-left: 8px;
          border-left: 1px solid #c3c9d4;
        }
        &.primary {
          color: rgba(63, 69, 75, 1);
        }
      }
      &.weather {
        background-image: url(../../../assets/svg/bg_weather_1.svg), url(../../../assets/svg/bg_weather_2.svg);
        background-position: right top, left bottom;
        background-size: contain, auto;
        .weather-row {
          padding-left: 24px;
          & + .weather-row {
            margin-top: 10px;
          }
          &.week-box {
            margin-top: 10px;
          }
          &.weather-box {
            i {
              font-size: 22px;
              color: #fe7f25;
            }
            .temperature {
              margin-left: 18px;
              font-size: 32px;
              color: #3f454b;
            }
            .festival {
              height: 17px;
              line-height: 17px;
              margin-left: 8px;
              padding: 0 8px;
              font-size: 12px;
              color: #6091bd;
              background-color: #cce7ff;
              border-radius: 9px 9px 9px 0;
            }
          }
        }
      }
    }
  }
}
</style>
