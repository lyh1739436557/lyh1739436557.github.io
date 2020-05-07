import echarts from 'echarts'

export default function (data) {
  // console.log(data)
  const { columnar, broken } = data
  return {
    color: ['#67ACFF', '#366CC8'],
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
    // legend: {
    //   data: ['常见警情', '所有警情']
    // },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     dataView: { readOnly: false },
    //     restore: {},
    //     saveAsImage: {}
    //   }
    // },
    // dataZoom: {
    //   show: false,
    //   start: 0,
    //   end: 100
    // },
    xAxis: {
      type: 'category',
      data: columnar.x,
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
        data: columnar.y
      },
      {
        name: '所有警情',
        type: 'line',
        data: broken.y
      }
    ]
  }
}
