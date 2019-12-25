import React, { Component } from "react";

import Header from "../Header";

import "./index.less";

const BasicLayout = props => {
  const { children, router } = props;
  console.log("BasicLayout :: ", props);
  return (
    <div className="basic-layout-container">
      {router.route !== "/login" && (
        <>
          {/* Using observer with new React hooks does not work*/}
          {/* https://github.com/mobxjs/mobx-react/issues/591 */}
          {/* https://codesandbox.io/s/k2vmjpqvnv?module=%2Fsrc%2Fmobx-react.js */}
          <Header router={router} />
          <div className="basic-tab-container"></div>
        </>
      )}
      <div className="basic-content-container">{children}</div>
    </div>
  );
};

export default BasicLayout;
