export default function (data) {
  // console.log(data)
  return {
    color: [ '#6648FF', '#2979FF', '#23BDFA' ],
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: 35,
      right: 10,
      bottom: 40
    },
    xAxis: [
      {
        type: 'category',
        data: data.x || [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: data.y instanceof Array && data.y.map(curr => {
      return {
        name: curr.name,
        type: 'bar',
        barMaxWidth: 12,
        data: curr.data.map(curr => {
          return window.isNaN(parseFloat(curr)) ? 0 : parseFloat(curr)
        })
      }
    })
  }
}
