import React, { Component } from "react";
import PageTabItem from "./PageTabItem";

import "./index.less";

export default class PageTab extends Component {
  render() {
    return (
      <div className="page-tab-container">
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        {/* <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem>
        <PageTabItem></PageTabItem> */}
      </div>
    );
  }
}
