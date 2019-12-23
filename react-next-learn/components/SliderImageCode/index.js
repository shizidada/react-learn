import React, { Component } from "react";

import GeneratorImageCode from "./GeneratorImageCode";

import "./index.less";

export default class SliderImageCode extends Component {
  static defaultProps = {
    width: 310,
    height: 150
  };

  componentDidMount() {
    const { width, height } = this.props;
    GeneratorImageCode({
      el: document.getElementById("slider-image-code-container"),
      width: width,
      height: height,
      onSuccess: function() {
        console.log("onSuccess");
      },
      onFail: function() {
        console.log("onFail");
      },
      onRefresh: function() {
        console.log("onRefresh");
      }
    });
  }

  render() {
    return <div id="slider-image-code-container"></div>;
  }
}
