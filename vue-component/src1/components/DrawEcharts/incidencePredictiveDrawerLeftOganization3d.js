export default function (data) {

  console.log(data)
  // var symbolSize = 10
  return {
    grid3D: {},
    // theme: 'dark',
    color: [ '#337EFF' ],
    tooltip: {
      formatter: function (data) {
        // console.log(data)
        let result = '时间：' + data.value.scbjsj
          + '<br />派出所名称：' + data.value.cjdwmc
          + '<br />警情类别：' + data.value.lb
          + '<br />发案量：' + data.value.num
        return result
      }
    },
    xAxis3D: {
      name: '',
      type: 'category'
    },
    yAxis3D: {
      name: '',
      type: 'category'
    },
    zAxis3D: {
      name: '',
      type: 'category'
    },
    dataset: {
      dimensions: [
        { name: 'scbjsj', type: 'ordinal' },
        { name: 'lb', type: 'ordinal' },
        { name: 'cjdwmc', type: 'ordinal' },
        'num'
      ],
      source: data
    },
    series: [
      {
        type: 'scatter3D',
        symbolSize: function (data) {
          // console.log(data)
          return Math.sqrt(data.num / 10) + 4
        },
        encode: {
          x: 'scbjsj',
          y: 'lb',
          z: 'cjdwmc' 
        }
      }
    ]
  }
}
