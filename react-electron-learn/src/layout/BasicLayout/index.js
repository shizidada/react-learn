import React, { useEffect } from "react";

import { Button } from "antd";

import SliderOperator from "../../containers/SliderOperator";
import BasicRoute from "../../routers/BasicRoute";

import "./index.less";

const process = window.process;

function BasicLayout() {
  useEffect(() => {
    const handleContextMenu = e => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
    };
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  return (
    <div className="basic-layout-container">
      <div className="slider-operator">
        <SliderOperator />
      </div>
      <div className="basic-content-contaienr">
        <div className="basic-header-container">
          <Button>bbb</Button>
        </div>
        <div className="basic-content-childern">
          <BasicRoute />
        </div>
        <div className="basic-footer-container">
          <span>Electron {process.versions.electron}</span>
          <p>Moose ©2020 Created by 江景</p>
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
