import React from "react";

import { Layout } from "antd";

import SliderOperator from "../../containers/SliderOperator";
import ActionBar from "../../containers/ActionBar";
import BasicRoute from "../../routers/BasicRoute";

import "./index.less";

const { Header, Sider, Content, Footer } = Layout;

const process = window.process;

function BasicLayout() {
  return (
    <Layout className="basic-layout-container">
      <Sider className="basic-slider-operator" width={80}>
        <SliderOperator />
      </Sider>
      <Layout style={{ marginLeft: 80 }}>
        <Header className="basic-header-container">
          <ActionBar />
        </Header>
        <Content className="basic-content-contaienr">
          <div className="basic-content-childern">
            <BasicRoute />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <span>Electron {process.versions.electron}</span>
          <p>Moose ©2020 Created by 江景</p>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
