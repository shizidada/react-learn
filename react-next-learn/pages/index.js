import React, { Component } from "react";
import ImageCode from "../components/ImageCode";

export default class Index extends Component {
  onReload = () => {
    console.log('onReload')
  };

  render() {
    return (
      <ImageCode
        imageUrl={
          "https://user-activity.wanshifu.com/images/sixthYears.cb403431.png"
        }
        onReload={this.onReload}
        onMatch={() => {
          console.log("code is match");
        }}
      />
    );
  }
}