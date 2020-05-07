import echarts from 'echarts'

export default function (data) {
  console.log(data)
  const { x, y1, y2, y3 } = data
  return {
    color: ['#67ACFF', '#FF9152', '#6648FF'],
    grid: {
      top: 10,
      left: 45,
      right: 15,
      bottom: 40
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#3E82F6'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: x,
      axisLabel: {
        textStyle: {
          color: '#3F454B'
        }
      }
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
        name: '常见警情',
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
        data: y2
      },
      {
        name: '所有警情',
        type: 'line',
        data: y1
      },
      {
        name: '预测警情',
        type: 'line',
        data: y3
      }
    ]
  }
}
