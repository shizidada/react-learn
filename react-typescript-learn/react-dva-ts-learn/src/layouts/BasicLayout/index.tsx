import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

interface BasicLayoutProps extends React.Props<BasicLayoutProps> {}
// interface BasicLayoutState {}

const ConstomLayout = (props: BasicLayoutProps) => {
  console.log(props);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/">
            <Icon type="user" />
            <span className="nav-text">首页</span>
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Icon type="video-camera" />
            <span className="nav-text">登录</span>
            <Link to="/login"></Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 560 }}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2019 Created by 江景</Footer>
      </Layout>
    </Layout>
  );
};

export default ConstomLayout;
