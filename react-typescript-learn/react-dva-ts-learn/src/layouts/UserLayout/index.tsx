import React, { Component } from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface UserLayoutProps {}

export default class UserLayout extends Component<UserLayoutProps, {}> {
  public render() {
    console.log("UserLayout :: ", this.props);
    return (
      <Layout style={{ height: "100vh" }}>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}
