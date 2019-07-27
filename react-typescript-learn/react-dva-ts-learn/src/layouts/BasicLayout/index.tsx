import React, { Component } from "react";
import { Layout, Breadcrumb, Icon } from "antd";

import SliderMenu from "../../containers/SliderMenu";

import "./index.less";

const { Header, Content, Footer } = Layout;

interface BasicLayoutProps {}
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

  private sliderMenuToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  private onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  public render() {
    console.log("BasicLayout :: ", this.props);
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SliderMenu collapsed={this.state.collapsed} onCollapse={this.onCollapse}></SliderMenu>

        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
          <Header
            style={{ background: "#fff", padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.sliderMenuToggle}
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
