import React from "react";
import { Layout } from "antd";

import BasicRoute from "../../routers/BasicRoute";

import SliderMenu from "../../containers/SliderMenu";
import "./index.less";

const { Header, Content, Footer } = Layout;

const process = window.process;

function BasicLayout() {
  return (
    <div className="basic-layout-container">
      <Layout>
        <SliderMenu />
        <Layout style={{ marginLeft: 200 }}>
          <Header className="basic-header" />
          <Content className="basic-content-contaienr">
            <div className="basic-content-childern">
              <BasicRoute />
            </div>
          </Content>

          <Footer className="basic-footer-container">
            <span>Electron {process.versions.electron}</span>
            <p>Moose ©2020 Created by 江景</p>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default BasicLayout;
