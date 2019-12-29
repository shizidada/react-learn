import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import { slideMenus } from "./slider-menu.config";

import "./index.less";

const { Sider } = Layout;

function SliderMenu() {
  const renderMenuItem = () => {
    return slideMenus.map((item, idx) => {
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>
            <Icon type={item.icon} />
            <span className="nav-text">{item.title}</span>
          </Link>
        </Menu.Item>
      );
    });
  };
  return (
    <Sider className="slider-container">
      <div className="slider-logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
        {renderMenuItem()}
      </Menu>
    </Sider>
  );
}

export default SliderMenu;
