import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import { addTabFromSlidMenu } from "../../store/system/actions";
import { AppState } from "../../store";

import { SliderMenuConfig } from "../../typings";
import { menus } from "./menu-config";

import "./index.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  isCloseSlide: boolean;
  currentTab: string;
  addTabFromSlidMenu: (payload: SliderMenuConfig) => void;
}
interface SliderMenuState {}

class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  menuItemClick = (payload: SliderMenuConfig) => {
    const parms: SliderMenuConfig = {
      ...payload,
    };
    this.props.addTabFromSlidMenu(parms);
  };

  render() {
    console.log(SliderMenu.name, this.props);
    const { isCloseSlide, currentTab } = this.props;
    return (
      <Sider
        className="slider-menu-container"
        breakpoint="lg"
        theme="light"
        trigger={null}
        collapsible
        collapsed={isCloseSlide}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[currentTab]}
          // openKeys={[`${currentTab}`]}
          selectedKeys={[`${currentTab}`]}
        >
          {menus.map((item: SliderMenuConfig, index: number) => {
            if (!item.childs) {
              return (
                <Menu.Item key={`${item.path}`} onClick={() => this.menuItemClick(item)}>
                  <Icon type={item.type} />
                  <span className="nav-text">{item.name}</span>
                  <Link to={`${item.path}`}></Link>
                </Menu.Item>
              );
            }
            return (
              <SubMenu
                key={`${item.path}`}
                title={
                  <span>
                    <Icon type={item.type} />
                    <span className="nav-text">{item.name}</span>
                  </span>
                }
              >
                {item.childs &&
                  item.childs.map((item: SliderMenuConfig) => {
                    return (
                      <Menu.Item key={`${item.path}`} onClick={() => this.menuItemClick(item)}>
                        <span className="nav-text">{item.name}</span>
                        <Link to={`${item.path}`}></Link>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

function mapStateToProps({ system }: AppState) {
  return { ...system };
}
export default connect(mapStateToProps, { addTabFromSlidMenu })(SliderMenu);
