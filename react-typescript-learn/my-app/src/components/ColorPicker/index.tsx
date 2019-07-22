import React, { Component } from "react"; // , CSSProperties
import { ChromePicker, SketchPicker, ChromePickerProps, ColorResult } from "react-color";
import theme from "../../theme";
// , getRandomColor
import { loadScript } from "./util";

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

interface Picker {
  [key: string]: React.ReactType<ChromePickerProps>;
}

const pickers: Picker = { chrome: ChromePicker, sketch: SketchPicker };

interface ColorPickerProps {
  type: "chrome" | "sketch";
}
interface ColorPickerState {
  displayColorPicker: boolean;
}

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

    this.state = {
      displayColorPicker: false,
    };
  }

  handleColorChange = (color: string) => {
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

  handleClick = () => {
    // const { displayColorPicker } = this.state;
    this.setState({ displayColorPicker: true });
  };

  handleClose = () => {
    // this.setState({ displayColorPicker: false });
  };

  handleChange = (color: ColorResult) => {};

  handleChangeComplete = (color: ColorResult) => {
    this.handleColorChange(color.hex);
  };

  render() {
    const { type } = this.props;
    const { displayColorPicker } = this.state;
    const Picker = pickers[type];

    return (
      <div className="color-picker-container" onClick={this.handleClick}>
        {displayColorPicker ? (
          <div className="color-picker-popover">
            <div className="color-picker-wrapper">
              <Picker
                {...this.props}
                // color={color}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
