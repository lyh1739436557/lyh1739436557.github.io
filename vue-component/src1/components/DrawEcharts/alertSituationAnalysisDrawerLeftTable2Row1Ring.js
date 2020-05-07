
const dispatchAction = function (myChart, type) {
  myChart.dispatchAction({
    type: type,
    seriesIndex: 0,
    dataIndex: 0
  })
}

const addEvent = function (data, myChart) {
  // console.log(data)
  window.setTimeout(function () {
    dispatchAction(myChart, 'highlight')
    myChart.on('mouseover', function (params) {
      // console.log(params)
      if (params.name === data[0].name || params.dataIndex === 0) {
        dispatchAction(myChart, 'highlight')
      } else {
        dispatchAction(myChart, 'downplay')
      }
    })
    myChart.on('mouseout', function (params) {
      dispatchAction(myChart, 'highlight')
    })
    myChart.on('globalout', function (params) {
      dispatchAction(myChart, 'highlight')
    })
  }, 1000)
}

export default function (data, elem) {
  console.log(elem)
  elem && addEvent(data, elem)
  return {
    color: [ '#23BDFA', '#2979FF', '#FAD14C', '#FF5431', '#6648FF' ],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 40,
      top: 5,
      bottom: 5,
      itemWidth: 8,
      itemHeight: 8
    },
    series: [
      {
        name: '警情分析',
        type: 'pie',
        radius: [ '60%', '80%' ],
        center: [ '30%', '50%' ],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            formatter: '{b}\n{c}'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '13',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }
    ]
  }
}
