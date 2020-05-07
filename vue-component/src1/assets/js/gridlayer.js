import ol from "openlayers";
import { DataSet } from 'mapv'

function initCellular(map, list, visible) {
  // 构造数据
  var data = [];
  list = list.data
  list.forEach(val => {
    data.push({
      geometry: {
        type: "Point",
        coordinates: ol.proj.transform(
          [+val.gdxzb, +val.gdyzb],
          "EPSG:4326",
          "EPSG:3857"
        )
      },
      count: 1
    });
  })
  var dataSet = new DataSet(data);
  //参数设置
  var mapvOptions = {
    fillStyle: "rgba(55, 50, 250, 0.8)",
    shadowColor: "rgba(255, 250, 50, 1)",
    shadowBlur: 20,
    max: 100,
    size: 50,
    label: {
      show: true,
      fillStyle: "white"
    },
    globalAlpha: 0.5,
    gradient: {
      0.25: "rgb(0,0,255)",
      0.55: "rgb(0,255,0)",
      0.85: "yellow",
      1.0: "rgb(255,0,0)"
    },
    draw: "grid"
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
