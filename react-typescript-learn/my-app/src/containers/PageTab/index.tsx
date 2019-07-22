import React, { Component } from "react";
import { connect } from "react-redux";
import { SliderMenuConfig } from "../SliderMenu/menu-config";
import PageTabItem from "./PageTabItem";

import { AppState } from "../../store";

import "./index.less";

interface PageTabProps {
  tabs: SliderMenuConfig[];
}

class PageTab extends Component<PageTabProps, {}> {
  render() {
    const { tabs } = this.props;
    console.log("PageTab :: tabs", this.props.tabs);
    return (
      <div className="page-tab-container">
        {tabs.map(item => {
          return <PageTabItem></PageTabItem>;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ system }: AppState) => {
  return {
    tabs: system.tabs,
  };
};
export default connect(
  mapStateToProps,
  {}
)(PageTab);
