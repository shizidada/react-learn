import React, { Component } from "react";

export default class PageTabItem extends Component {
  render() {
    return (
      <div className="page-tab-item-wrapper">
        <div className="tab-item-text">text</div>
        <div className="tab-item-del-icon">x</div>
      </div>
    );
  }
}
