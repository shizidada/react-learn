import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";

import ImageCode from "../../components/ImageCode";

import "./index.less";

const imageUrl = [
  "https://user-activity.wanshifu.com/images/3.c7831ec7.png",
  "https://user-activity.wanshifu.com/images/sixthYears.cb403431.png",
  "https://user-activity.wanshifu.com/images/4.7f686b95.png",
  "https://user-activity.wanshifu.com/images/eleven.c36e7596.png"
];
export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: imageUrl[0]
    };
  }
  onReload = () => {
    const randomIndex = Math.floor(Math.random() * imageUrl.length);
    this.setState({
      imageUrl: `${imageUrl[randomIndex]}?_t=${Date.now()}`
    });
  };

  componentDidMount() {}

  render() {
    console.log(this.props)
    return (
      <div className="index-page-container ">
        <ImageCode
          imageUrl={this.state.imageUrl}
          onReload={this.onReload}
          onMatch={() => {
            console.log("code is match");
          }}
        />
      </div>
    );
  }
}
