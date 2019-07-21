import React, { Component } from "react";
import { ChromePicker, SketchPicker } from "react-color";
import theme from "../../theme";
import { loadScript, getRandomColor } from "./util";

import "./index.less";

const ROUTE_BASE_NAME = process.env.PUBLIC_URL || "";
const BASE_NAME = ROUTE_BASE_NAME ? ROUTE_BASE_NAME.replace("/", "") : "";
const OLD_LESS_ID = `less:${BASE_NAME ? BASE_NAME + "-" : ""}color:old`;
const LESS_ID = `less:${BASE_NAME ? BASE_NAME + "-" : ""}color`;
const LESS_URL = `${ROUTE_BASE_NAME}/less.min.js`;

// declare const window: Window & { less: any };
// declare global {
//   interface Window {
//     less: any;
//   }
// }
const noop = () => {};

// type Picker = { chrome: typeof ChromePicker; sketch: typeof SketchPicker };

const pickers = { chrome: ChromePicker, sketch: SketchPicker };

interface ColorPickerProps {
  type: "chrome" | "sketch";
}
interface ColorPickerState {}

export default class ColorPicker extends Component<ColorPickerProps, ColorPickerState> {
  lessLoaded: boolean = false;

  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    position: "bottom",
  };

  constructor(props: ColorPickerProps) {
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
  }

  handleColorChange = () => {
    const color = getRandomColor();
    const changeColor = () => {
      window.less
        .modifyVars({
          ...theme,
          "@primary-color": color,
          "@transparent-color": "transparent",
        })
        .then(() => {
          // 先清除缓存样式
          const oldStyle = document.getElementById(OLD_LESS_ID);
          console.log("oldStyle", oldStyle);
          if (oldStyle) oldStyle.remove();

          // 将生成之后的style标签插入body首部
          // 由于每个页面的css也是异步加载（无论开发、还是生产），会导致样式插入在生成的style标签之后，导致主题失效
          const newStyle = document.getElementById(LESS_ID);
          console.log("newStyle", newStyle);
          if (!newStyle) return;

          // document.head.appendChild(newStyle);
          document.body.insertBefore(newStyle, document.body.firstChild);
          window.localStorage.setItem("theme-style-content", newStyle.innerHTML);
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
        this.lessLoaded = true;
        changeColor();
      });
    }
  };

  render() {
    const { type } = this.props;
    const Picker = pickers[type];
    // console.log("coor-picker-container", this.props);
    // console.log("coor-picker-container Picker", Picker);

    return (
      <div className="coor-picker-container" onClick={this.handleColorChange}>
        {/* <Picker
          color="red"
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        /> */}
      </div>
    );
  }
}
