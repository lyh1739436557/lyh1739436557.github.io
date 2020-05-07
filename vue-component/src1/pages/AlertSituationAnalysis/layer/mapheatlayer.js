import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'

/**
 * 加载热力图
 */
function loadHeat (layer, data = []) {
  data = data.data
  if (Array.isArray(data) && data.length === 0) return
  var heatSource = layer.getSource()
  heatSource.clear()
  data.forEach(function (v, k) {
    if (Number.isNaN(+v.gdxzb) !== true && Number.isNaN(+v.gdyzb) !== true) {
      var feature = new Feature({
        geometry: new Point([+v.gdxzb, +v.gdyzb]),
        radius: 2
      })
      heatSource.addFeature(feature)
    }
  })
}

export default loadHeat
