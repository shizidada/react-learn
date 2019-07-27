import React, { Component } from "react";
import { Link } from "dva/router";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import "./index.less";

const { Sider, Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

interface BasicLayoutProps {
  temp: number;
}
interface BasicLayoutState {
  collapsed: boolean;
}

class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  public constructor(props: BasicLayoutProps) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  private onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  public render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
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

            {/* <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Login</span>
        <Link to="/login">Login</Link>
      </Menu.Item> */}

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
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
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
          <Header
            style={{ background: "#fff", padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: "64px 16px", overflow: "initial" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©2019 Created by 江景</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
