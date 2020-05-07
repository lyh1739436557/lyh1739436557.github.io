import echarts from 'echarts'
//
const colors = {
  '黄赌毒': '#FF5431',
  '盗窃类': '#23BDFA',
  '诈骗类': '#2979FF',
  '打架斗殴': '#FAD14C',
  'default': '#49E0FD'
}

export default function (data) {
  // console.log(data)
  return {
    legend: {
      right: 10
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      max: 23
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true
    },
    grid: {
      top: 40,
      bottom: 40
    },
    series: data.map(curr => {
      let color = [{
        offset: 0,
        color: colors[curr[0][2]] ? colors[curr[0][2]] : colors['default'] + '50'
      }, {
        offset: 1,
        color: colors[curr[0][2]] ? colors[curr[0][2]] : colors['default']
      }]
      return {
        name: curr[0][2],
        data: curr,
        type: 'scatter',
        symbolSize: function (data) {
          return Math.sqrt(data[1]) + 12
        },
        label: {
          emphasis: {
            show: true,
            formatter: function (param) {
              return param.value[0] + '时：' + param.value[1]
            },
            position: 'bottom'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, color)
          }
        }
      }
    })
  }
}
