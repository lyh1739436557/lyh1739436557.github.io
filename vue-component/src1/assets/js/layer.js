// import Source from "ol/source/Vector"
// import Layer from "ol/layer/Vector"

import ol from 'openlayers'
/**
 *
 * @param {Boolean} isShow ['初始状态地图是否显示']
 * @param {Number} zIndex ['地图图层层级']
 */

function creatFeature(isShow=true, zIndex=1000) {
    let vectorSource = new ol.source.Vector({
        features: [],
        extent: 500
    });
    let ForcecastsHeatLayer = new ol.layer.Vector({
        visible: isShow,
        source: vectorSource,
        zIndex: zIndex
    });
    return ForcecastsHeatLayer
}

export default creatFeature
