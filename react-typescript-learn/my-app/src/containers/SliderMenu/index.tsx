import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "../../store";

import { Layout, Menu, Icon } from "antd";

import "./index.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  isOpenSlider: boolean;
}
interface SliderMenuState {}

class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  render() {
    console.log(SliderMenu.name, this.props);
    const { isOpenSlider } = this.props;
    return (
      // {/* light dark */}
      <Sider
        className="slider-menu-container"
        breakpoint="lg"
        theme="light"
        // collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={isOpenSlider}
        // onBreakpoint={broken => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="logo" />
        {/* light dark */}
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="book" />
            <span className="nav-text">Home</span>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text">Login</span>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="skin" />
            <span className="nav-text">Skin</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="setting" />
            <span className="nav-text">Setting</span>
          </Menu.Item>

          <SubMenu
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
          </SubMenu>
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
  {}
)(SliderMenu);
