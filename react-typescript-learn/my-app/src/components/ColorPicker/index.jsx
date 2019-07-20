import React, { Component } from "react";
import { Button } from "antd";

import { loadScript, getRandomColor } from "./util";

import theme from "../../theme";

const ROUTE_BASE_NAME = process.env.PUBLIC_URL || "";
console.log(ROUTE_BASE_NAME);

const BASE_NAME = ROUTE_BASE_NAME ? ROUTE_BASE_NAME.replace("/", "") : "";

const OLD_LESS_ID = `less:${BASE_NAME ? BASE_NAME + "-" : ""}color:old`;
const LESS_ID = `less:${BASE_NAME ? BASE_NAME + "-" : ""}color`;
const LESS_URL = `${ROUTE_BASE_NAME}/less.min.js`;

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    // 快速生效
    const themeStyleContent = window.localStorage.getItem("theme-style-content");
    if (themeStyleContent) {
      const themeStyle = document.createElement("style");
      themeStyle.type = "text/css";
      themeStyle.id = OLD_LESS_ID;
      themeStyle.innerHTML = themeStyleContent;
      document.body.insertBefore(themeStyle, document.body.firstChild);
    }

    // const { primaryColor } = this.props;
    // .less文件加载完成之后，生成主题，localStorage中的主题有可能过时，需要覆盖
    // if (primaryColor) this.handleColorChange(primaryColor);
  }
  handleColorChange = () => {
    const color = getRandomColor();
    const changeColor = () => {
      window.less
        .modifyVars({
          ...theme,
          "@primary-color": color,
        })
        .then(() => {
          // 先清除缓存样式
          const oldStyle = document.getElementById(OLD_LESS_ID);
          console.log("oldStyle", oldStyle);
          if (oldStyle) oldStyle.remove();

          // 将生成之后的style标签插入body首部
          // 由于每个页面的css也是异步加载（无论开发、还是生产），会导致样式插入在生成的style标签之后，导致主题失效
          const lessColor = document.getElementById(LESS_ID);
          console.log("lessColor", lessColor);
          if (!lessColor) return;

          // document.head.appendChild(lessColor);
          document.body.insertBefore(lessColor, document.body.firstChild);
          window.localStorage.setItem("theme-style-content", lessColor.innerHTML);
        });
    };

    if (this.lessLoaded) {
      changeColor();
    } else {
      window.less = {
        logLevel: 2,
        async: true,
        javascriptEnabled: true,
        modifyVars: {
          // less.js加载完成就会触发一次转换，需要传入变量
          ...theme,
          "@primary-color": color,
        },
      };
      loadScript(LESS_URL).then(() => {
        console.log("loadScript", LESS_URL);
        this.lessLoaded = true;
        changeColor();
      });
    }
  };

  render() {
    return (
      <div>
        ColorPicker
        <br />
        <Button onClick={() => this.handleColorChange("#1DA57A")}>#CCC</Button>
      </div>
    );
  }
}
