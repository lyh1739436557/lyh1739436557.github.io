// import Source from 'ol/source/Vector'
// import Layer from 'ol/layer/Vector'
// import { Cluster } from 'ol/source.js'
import ol from 'openlayers'
// import { Circle as CircleStyle, Fill, Style, Icon, Text } from 'ol/style.js'
//

/**
 *
 * @param {Boolean} isShow ['初始状态地图是否显示']
 * @param {Number} zIndex ['地图图层层级']
 */

function creatFeature (isShow = true, icon, zIndex = 1005) {
  var styleCache = {}
  let vectorSource = new ol.source.Vector({
    features: [],
    extent: 500
  })
  var clusterSource = new ol.source.Cluster({
    distance: parseInt(50, 10),
    source: vectorSource
  })
  let ForcecastsHeatLayer = new ol.layer.Vector({
    visible: isShow,
    source: clusterSource,
    zIndex: zIndex,
    style: function (feature) {
      var size = feature.get('features').length
      // console.log(feature.values_.geometry.getCoordinates());
      var style = styleCache[size]
      if (!style) {
        style = new ol.style.Style({
          image: (size === 1 ? new ol.style.Icon({
            scale: 0.1,
            src: icon
          }) : new ol.style.Circle({
            radius: Math.min(30, (size / 100 * 300)),
            fill: new ol.style.Fill({
              color: [255, 153, 0, Math.min(0.8, size / 20)]
            })
          })),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({
              color: 'black',// '#fff'
            })
          })
        })
        styleCache[size] = style
      }
      return style
    }
  })
  return ForcecastsHeatLayer
}

export default creatFeature
