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

  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      // width: window.innerWidth,
      // height: window.innerHeight,
      direction: "vertical",
      slidesPerView: 1,
      // spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  render() {
    return (
      <div className="swiper-container ">
        <div className="swiper-wrapper">
          <div className="swiper-slide slider1">
            <ImageCode
              imageUrl={this.state.imageUrl}
              onReload={this.onReload}
              onMatch={() => {
                console.log("code is match");
              }}
            />
          </div>
          <div className="swiper-slide slider2">Slide 2</div>
          <div className="swiper-slide slider3">Slide 3</div>
        </div>
      </div>
    );
  }
}
