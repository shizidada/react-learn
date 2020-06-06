import React, { FunctionComponent, useState } from 'react'; // , CSSProperties
import { ChromePicker, SketchPicker, ChromePickerProps, ColorResult } from 'react-color';
import theme from './theme';
import { loadScript } from './util';
import { OLD_LESS_ID, LESS_ID, LESS_URL } from '../../config/less.config';

import './index.less';

interface Picker {
  [key: string]: React.ReactType<ChromePickerProps>;
}

const pickers: Picker = { chrome: ChromePicker, sketch: SketchPicker };

interface ColorPickerProps {
  type: 'chrome' | 'sketch';
  displayColorPicker?: boolean;
}

const ColorPicker: FunctionComponent<ColorPickerProps> = ({ type, displayColorPicker }) => {

  const [lessLoaded, setLessLoaded] = useState(false);
  const [currentColor, setCurrentColor] = useState('#1890ff');

  const handleColorChange = (color: string) => {
    const changeColor = () => {
      window.less
        .modifyVars({
          ...theme,
          '@primary-color': color,
          '@transparent-color': color,
        })
        .then(() => {
          // 先清除缓存样式
          const oldStyle = document.getElementById(OLD_LESS_ID);
          console.log('oldStyle', oldStyle);
          if (oldStyle) oldStyle.remove();

          // 将生成之后的style标签插入body首部
          // 由于每个页面的css也是异步加载（无论开发、还是生产），会导致样式插入在生成的style标签之后，导致主题失效
          const newStyle = document.getElementById(LESS_ID);
          console.log('newStyle', newStyle);
          if (!newStyle) return;

          // document.head.appendChild(newStyle);
          document.body.insertBefore(newStyle, document.body.firstChild);
          window.localStorage.setItem('THEME_STYLE_CONTENT', newStyle.innerHTML);
        });
    };

    if (lessLoaded) {
      changeColor();
    } else {
      window.less = {
        logLevel: 2,
        async: true,
        javascriptEnabled: true,
        // less.js 加载完成就会触发一次转换，需要传入变量
        modifyVars: {
          ...theme,
          '@primary-color': color,
        },
      };
      loadScript(LESS_URL).then(() => {
        setLessLoaded(true);
        changeColor();
      });
    }
  };

  const handleChange = (color: ColorResult) => {
    setCurrentColor(color.hex);
  };

  const handleChangeComplete = (color: ColorResult) => {
    handleColorChange(color.hex);
  };

  const Picker = pickers[type];
  return (
    <div className="color-picker-container" data-color-picker="ColorPicker">
      {displayColorPicker ? (
        <div className="color-picker-popover">
          <div className="color-picker-wrapper">
            <Picker
              color={currentColor}
              onChange={handleChange}
              onChangeComplete={handleChangeComplete}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
