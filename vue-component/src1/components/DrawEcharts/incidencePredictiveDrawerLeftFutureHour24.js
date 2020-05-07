export default function (data) {
  // console.log(data)
  return {
    tooltip: {
      trigger: 'axis',
      lineStyle: {
        color: 'red'
      }
    },
    color: [ '#337EFF', '#FF5431' ],
    legend: {},
    grid: {
      top: 45,
      left: 45,
      right: 15,
      bottom: 40,
      borderColor: '#5BA1FD'
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        alignWithLabel: true
      },
      data: data.x
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '实时警情',
        type: 'line',
        data: data.y1,
        showSymbol: false,
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
        name: '预测警情',
        type: 'line',
        data: data.y2,
        showSymbol: false,
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
