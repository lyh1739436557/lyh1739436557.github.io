// import Feature from 'ol/Feature'
// import Point from 'ol/geom/Point'
// import { transform } from 'ol/proj'
import ol from 'openlayers'

// 初始化地图图层
function initCameraLayer (layer, list) {
  if (list.data.length === 0) return
  return new Promise((resolve) => {
    var vectorSource = layer.getSource()
    var source = vectorSource.getSource()
    source.clear()
    let coor = []
    var features = new Array(list.length)
    // console.log(list)
    list = list.data
    list.forEach((val, i) => {
      coor = ol.proj.transform([+val.gdxzb, +val.gdyzb], 'EPSG:4326', 'EPSG:3857')
      features[i] = new ol.Feature({
        geometry: new ol.geom.Point(coor)
      })
      // var content = [val[2], val[3]]
      // var name = val[4]
      features[i].markerType = 'tgjLayer'
      // features[i].attr = { coor, content, name}
      resolve()
    })
    source.addFeatures(features)
  })
}

export default initCameraLayer
