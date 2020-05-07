import React, { Component } from 'react';
import DeckGL, { HexagonLayer } from 'deck.gl';

/**
 * 动态人口地图柱状图显示
 */
const LIGHT_SETTINGS = {
  lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.2,
  lightsStrength: [1.5, 1.5, 1.5, 0.7],
  numberOfLights: 2
};
const elevationScale = { min: 1, max: 50 };

const defaultProps = {
  radius: 200,
  upperPercentile: 100,
  coverage: 1,
};

export default class DackLayer extends React.Component{
  static get defaultColorRange() {
    return colorRange;
  }
  static get defaultViewport() {
    return {
      longitude: 116.29,
      latitude: 40.16,
      zoom: 7.82,
      minZoom: 11,
      maxZoom: 16,
      pitch: 40.5,
      radius: 42,
      //bearing: -27.396674584323023
      bearing: 0
    };
  }
  constructor(props) {
    super(props);
    this.startAnimationTimer = null;
    this.intervalTimer = null;
    this.state = {
      elevationScale: elevationScale.min
    };

    this._startAnimate = this._startAnimate.bind(this);
    this._animateHeight = this._animateHeight.bind(this);
  }
  //颜色十六进制转rgb
  colorRgb(color) {
    if (color.substring(0, 1) != "#") return this.toHex(color);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      let sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return sColorChange.join(",");
    } else {
      return sColor;
    }
  }

  // //初次渲染
  // componentDidMount() {
  //   this._animate();
  //   this.addHistogramLayer(this.props.map.dackData);
  //   // this.props.dispatch({
  //   //    type:'map/getDackData'
  //   // })
  // }
  // // componentWillReceiveProps(nextProps) {
  // //   if (nextProps.data.length !== this.props.map.dackList[0].length) {
  // //     this._animate();
  // //   }
  // // }
  // componentWillUnmount() {
  //   this._stopAnimate();
  // }

  // _animate() {
  //   this._stopAnimate();

  //   // wait 1.5 secs to start animation so that all data are loaded
  //   this.startAnimationTimer = window.setTimeout(this._startAnimate, 1500);
  // }

  // _startAnimate() {
  //   this.intervalTimer = window.setInterval(this._animateHeight, 20);
  // }

  // _stopAnimate() {
  //   window.clearTimeout(this.startAnimationTimer);
  //   window.clearTimeout(this.intervalTimer);
  // }

  // _animateHeight() {
  //   if (this.state.elevationScale === elevationScale.max) {
  //     this._stopAnimate();
  //   } else {
  //     this.setState({ elevationScale: this.state.elevationScale + 1 });
  //   }
  // }

  // _initialize(gl) {
  //   gl.enable(gl.DEPTH_TEST);
  //   gl.depthFunc(gl.LEQUAL);
  // }

  render() {
    const { viewport, dackList, radius, coverage, upperPercentile } = this.props.map;
    if (!dackList) {
      return null;
    }
    const layers = [
      new HexagonLayer({
        id: 'hexagon-layer',      //  Canvas ID允许CSS中的样式定制。
        colorRange:dackList[1],
        coverage:0.7,
        data: dackList[0],
        elevationRange: [0, 200],
        elevationScale: this.state.elevationScale,
        extruded: true,
        getPosition: d => d,
        lightSettings: LIGHT_SETTINGS,
        onHover: this.props.onHover,
        opacity: 0.4,
        pickable: Boolean(this.props.onHover),
        radius:200,
        upperPercentile:100,
        hexagonAggregator: pointToHexbin
      }),
    ];
    return <DeckGL {...viewport} layers={layers} onWebGLInitialized={this._initialize} />;
  }
}