// import Feature from 'ol/Feature'
// import Point from 'ol/geom/Point'
// import { transform } from 'ol/proj'
import ol from 'openlayers'
function changeLatLng(params) {
  return ol.proj.transform([+params[0], +params[1]], 'EPSG:4326', 'EPSG:3857');
}

function getPolygonData(params) {
  let arr = [];
  params.forEach(res => {
    arr.push(changeLatLng(res))
  })
  return [arr]
}

function getColor(type) {
  let color = "";
  switch (type) {
    case '1':
      color = "#F7323260"
      break;
    case '2':
      color = "#F56C6C60"
      break;
    case '3':
      color = "#FEA80860"
      break;
    case '4':
      color = "#E6A23C60"
      break;
    case '5':
      color = "#67C23A60"
      break;

    default:
      color = "black"
      break;
  }
  return color
}

// 初始化地图图层
function initCameraLayer(layer, list) {
  if (list.data.length === 0) return
  return new Promise((resolve) => {
    var vectorSource = layer.getSource();
    vectorSource.clear();
    list = list.data;
    list.forEach((val, i) => {
      let coor = getPolygonData(val.coor);
      let features = new ol.Feature({
        geometry: new ol.geom.Polygon(coor)
      })
      features.setStyle(
        new ol.style.Style({
          fill: new ol.style.Fill({
            color: getColor(val.color)
          }),
          stroke: new ol.style.Stroke({
            color: "rgba(14, 182, 200, 1)",
            width: 1,
            // lineDash: [5, 10, 10, 5]
          })
        })
      );
      vectorSource.addFeature(features)
    })
    resolve()
  })
}

export default initCameraLayer
