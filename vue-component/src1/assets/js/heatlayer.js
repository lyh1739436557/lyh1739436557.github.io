// import Source from 'ol/source/Vector'
// import Heatmap from 'ol/layer/Heatmap'

// /**
//  *
//  * @param {Boolean} isShow ['初始状态地图是否显示']
//  * @param {Number} zIndex ['地图图层层级']
//  */

// function creatFeature (isShow = true, zIndex = 1000) {
//   let vectorSource = new Source({
//     features: [],
//     extent: 500
//   })
//   let ForcecastsHeatLayer = new Heatmap({
//     visible: isShow,
//     source: vectorSource,
//     zIndex: zIndex,
//     gradient: [
//       'rgba(56,209,114,0.30)',
//       'rgb(56,209,114)',
//       'rgb(254,242,109)',
//       'rgb(255,92,90)'
//     ],
//     blur: parseInt(50),
//     radius: parseInt(15)
//   })
//   return ForcecastsHeatLayer
// }

// export default creatFeature
