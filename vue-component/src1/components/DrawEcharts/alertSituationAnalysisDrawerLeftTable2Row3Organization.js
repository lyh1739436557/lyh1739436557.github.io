import echarts from 'echarts'

export default function (data) {
  // console.log(data)
  const { x, y } = data
  return {
    color: ['#67ACFF', '#366CC8'],
    grid: {
      top: 10,
      left: 45,
      right: 15,
      bottom: 85
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#3F454B'
        },
        formatter: function (val) {
          return val.split('').join('\n')
        }
      },
      data: x
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#3F454B'
        }
      }
    },
    series: [
      {
        name: '发案数量',
        type: 'bar',
        barMaxWidth: 8,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#4AE0F7' },
                { offset: 0.2, color: '#4AE0F7' },
                { offset: 0.2, color: '#47BBEC' },
                { offset: 0.4, color: '#47BBEC' },
                { offset: 0.4, color: '#4194DC' },
                { offset: 0.6, color: '#4194DC' },
                { offset: 0.6, color: '#366CC8' },
                { offset: 1, color: '#366CC8' }
              ]
            )
          }
        },
        data: y
      }
    ]
  }
}
