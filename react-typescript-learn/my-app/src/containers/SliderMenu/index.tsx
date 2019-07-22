import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
import { addTabFromSlidMenu } from "../../store/system/actions";
import { AppState } from "../../store";

import { menus, SliderMenuConfig } from "./menu-config";

import "./index.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  isCloseSlider: boolean;
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
    const { isCloseSlider } = this.props;
    return (
      // {/* light dark */}
      <Sider
        className="slider-menu-container"
        breakpoint="lg"
        theme="light"
        trigger={null}
        collapsible
        collapsed={isCloseSlider}
        // collapsedWidth="0"
        // onBreakpoint={broken => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="logo" />
        {/* light dark */}
        <Menu theme="light" mode="inline" defaultSelectedKeys={["home"]}>
          {menus.map((item: SliderMenuConfig, index: number) => {
            if (!item.childs) {
              return (
                <Menu.Item key={`${item.activeKey}`} onClick={() => this.menuItemClick(item)}>
                  <Icon type={item.type} />
                  <span className="nav-text">{item.name}</span>
                  <Link to={`${item.path}`}></Link>
                </Menu.Item>
              );
            }
            return (
              <SubMenu
                key={`${item.activeKey}`}
                title={
                  <span>
                    <Icon type={item.type} />
                    {item.name}
                  </span>
                }
              >
                {item.childs &&
                  item.childs.map((item: SliderMenuConfig) => {
                    return (
                      <Menu.Item key={`${item.activeKey}`} onClick={() => this.menuItemClick(item)}>
                        <span className="nav-text">{item.name}</span>
                        <Link to={`${item.path}`}></Link>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
          {/* <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
    );
  }
}

function mapStateToProps({ system }: AppState) {
  return { ...system };
}
export default connect(
  mapStateToProps,
  { addTabFromSlidMenu }
)(SliderMenu);
