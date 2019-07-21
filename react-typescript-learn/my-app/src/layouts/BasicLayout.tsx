import React, { Component } from "react";
import { Layout } from "antd";

import SliderMenu from "../containers/SliderMenu";
import CustomHeader from "../containers/CustomHeader";
import PageTab from "../containers/PageTab";

import "./BasicLayout.less";

const { Content, Footer } = Layout;

interface BasicLayoutProps {}

interface BasicLayoutState {}

export default class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <SliderMenu />
        <Layout>
          <CustomHeader />
          <PageTab />

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 660 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: "center" }}> ©2019 Created by 江景 </Footer>
        </Layout>
      </Layout>
    );
  }
}
