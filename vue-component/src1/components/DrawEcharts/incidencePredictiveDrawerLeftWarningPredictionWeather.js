export default function (data) {
  // console.log(data)
  return {
    tooltip: {
      show: false
    },
    color: [ '#7F98FF', '#FEC471' ],
    grid: {
      show: false,
      top: 25,
      left: 5,
      right: 5,
      bottom: 25,
      borderColor: '#5BA1FD'
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: true,
      axisLine: {
        onZero: false
      },
      data: data.x
    },
    yAxis: {
      type: 'value',
      show: false,
      scale: true
    },
    series: [
      {
        name: '最低气温',
        type: 'line',
        data: data.y1,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
        label: {
          show: true,
          position: 'bottom',
          textStyle: {
            color: '#3F454B'
          },
          formatter: function (data) {
            return data.value + '℃'
          }
        },
        itemStyle: {
          color: '#3E82F6',
          borderColor: '#fff',
          borderWidth: 1
        },
        lineStyle: {
          color: {
            type: 'linear',
            colorStops: [{
              offset: 0,
              color: '#72B8FB' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#337EFF' // 100% 处的颜色
            }],
            global: true // 缺省为 false
          }
        }
      },
      {
        name: '最高气温',
        type: 'line',
        data: data.y2,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#3F454B'
          },
          formatter: function (data) {
            return data.value + '℃'
          }
        },
        itemStyle: {
          color: '#FE8328',
          borderColor: '#fff',
          borderWidth: 1
        },
        lineStyle: {
          color: {
            type: 'linear',
            colorStops: [{
              offset: 0,
              color: '#FF853E' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#FF5431' // 100% 处的颜色
            }],
            global: true // 缺省为 false
          }
        }
      }
    ]
  }
}
