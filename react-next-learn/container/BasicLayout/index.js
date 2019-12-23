import React, { Component } from "react";

import Header from "../Header";

class BasicLayout extends Component {
  render() {
    const { children, router } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Header router={router} />
        {children}
      </div>
    );
  }
}

export default BasicLayout;
