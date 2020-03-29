import React, { SFC } from 'react';
import { Location } from 'history';
// import { connect } from 'dva';
// import { Dispatch } from 'redux';
import { Layout } from 'antd';
import SliderMenu from '../../containers/global/SliderMenu';
import GlobalHeader from '../../containers/global/GlobalHeader';
import BasicRoute from '../../routers/BasicRoute';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../typings';

import './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends ConnectState {
  location: Location<{}>;
}

const BasicLayout: SFC<BasicLayoutProps> = ({ location, login }) => {
  return (
    <Layout className="basic-layout-container" >
      <SliderMenu />
      <Layout className="basic-layout-content" >
        <GlobalHeader />
        <Content className="basic-layout-wrapper">
          <BasicRoute />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout;
