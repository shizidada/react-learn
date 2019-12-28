import React from "react";
import { Layout } from "antd";

import SliderMenu from '../../containers/SliderMenu';
import './index.less';

const { Header, Footer, Content } = Layout;

function BasicLayout({ children }) {
  return (
    <div className="basic-layout-container">
      <Layout>
        <SliderMenu />
        <Layout style={{ marginLeft: 200 }}>
          <Header className="basic-header" />
          <Content className="basic-content-contaienr">
            <div className="basic-content-childern">
              { children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Moose Electron ©2020 Created by JJ</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default BasicLayout;
