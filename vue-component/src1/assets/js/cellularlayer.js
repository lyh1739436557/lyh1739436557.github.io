import ol from "openlayers";
import { DataSet } from 'mapv'

function initCellular(map, list, visible) {
  // 构造数据
  var data = [];
  list = list.data
  list.forEach(val => {
    data.push(
      {
        geometry: {
          type: "Point",
          coordinates: ol.proj.transform(
            [+val.gdxzb, +val.gdyzb],
            "EPSG:4326",
            "EPSG:3857"
          ),
        },
        lng: val.gdxzb,
        lat: val.gdyzb
        // count: 1
      }
    );
  })
  var dataSet = new DataSet(data);
  //参数设置
  var mapvOptions = {
    size: 50,
    globalAlpha: 0.6,
    unit: 'm',
    zIndex: 2,
    max: 6,
    gradient: {
      0.25: "rgba(0,0,255,0.6)",
      0.55: "rgba(0,255,0,0.6)",
      0.85: "rgba(255,255,0,0.6)",
      1.0: "rgba(255,0,0,0.6)"
    },
    coordType: 'bd09mc',
    draw: 'honeycomb'
  };
  var options = {
    map: map.map,
    dataSet: dataSet,
    mapvOptions: mapvOptions
  };
  var layers = new ol.layer.Image({
    source: new ol.source.Mapv(options)
  });
  layers.setVisible(visible);
  map.map.addLayer(layers);
  return layers
}

export default initCellular
