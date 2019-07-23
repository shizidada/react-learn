import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { addTabFromSlidMenu } from "../../store/system/actions";
import { SliderMenuConfig } from "../SliderMenu/menu-config";

import { AppState } from "../../store";

import "./index.less";
const { Item } = Menu;

interface PageTabProps {
  tabs: SliderMenuConfig[];
  type?: string;
  activeKey?: string;
  name?: string;
  path?: string;
  currentTab: string;
  addTabFromSlidMenu: (payload: SliderMenuConfig) => void;
}

class PageTab extends Component<PageTabProps, {}> {
  menuItemClick = (payload: SliderMenuConfig) => {
    const parms: SliderMenuConfig = {
      ...payload,
    };
    this.props.addTabFromSlidMenu(parms);
  };

  render() {
    const { tabs, currentTab } = this.props;
    console.log("PageTab :: tabs", this.props.tabs);
    return (
      <div>
        <Menu mode="horizontal" selectedKeys={[`${currentTab}`]}>
          {tabs.map((item: SliderMenuConfig) => {
            return (
              <Menu.Item key={item.path} onClick={() => this.menuItemClick(item)}>
                <Link to={`${item.path}`}>
                  <div className="tab-item-text">{item.name}</div>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ system }: AppState) => {
  return {
    tabs: system.tabs,
    currentTab: system.currentTab,
  };
};
export default connect(
  mapStateToProps,
  { addTabFromSlidMenu }
)(PageTab);
