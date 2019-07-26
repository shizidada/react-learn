import React, { Component } from "react";
import { Link } from "dva/router";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}
interface SliderMenuState {}

export default class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  public constructor(props: SliderMenuProps) {
    super(props);
  }

  private onCollapse = (collapsed: boolean) => {
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  public render() {
    return (
      <Sider
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.onCollapse}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["/"]} mode="inline">
          <Menu.Item key="/">
            <Icon type="pie-chart" />
            <span>Home</span>
            <Link to="/"></Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Order</span>
            <Link to="/order"></Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Icon type="compass" />
              <span>Tom</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="picture" />
              <span>Bill</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="tablet" />
              <span>Alex</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Icon type="deployment-unit" />
              <span>Team 1</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="pull-request" />
              <span>Team 2</span>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
