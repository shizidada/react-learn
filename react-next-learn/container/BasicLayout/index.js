import React, { Component } from "react";

import Header from "../Header";

import "./index.less";

class BasicLayout extends Component {
  render() {
    const { children, router } = this.props;
    // console.log(this.props);
    return (
      <div className="basic-layout-container">
        <Header router={router} />
        <div className="basic-content-container">{children}</div>
      </div>
    );
  }
}

export default BasicLayout;
