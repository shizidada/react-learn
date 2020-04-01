import React, { SFC, useEffect } from 'react';
import { Location } from 'history';
// import { connect } from 'dva';
// import { Dispatch } from 'redux';
import { Layout } from 'antd';
import SliderMenu from '../../containers/global/SliderMenu';
import GlobalHeader from '../../containers/global/GlobalHeader';
import BasicRoute from '../../routers/BasicRoute';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../typings';
import { BASE_NAME } from '../../config/less.config';

import './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends ConnectState {
  location: Location<{}>;
}

const OLD_LESS_ID = `less:${BASE_NAME ? `${BASE_NAME}-` : ''}color:old`;

const BasicLayout: SFC<BasicLayoutProps> = ({ location, login }) => {
  // 初始化主题？
  const initTheme = () => {
    const themeStyleContent = window.localStorage.getItem('THEME_STYLE_CONTENT');
    if (themeStyleContent) {
      const themeStyle = document.createElement('style');
      themeStyle.type = 'text/css';
      themeStyle.id = OLD_LESS_ID;
      themeStyle.innerHTML = themeStyleContent;
      document.body.insertBefore(themeStyle, document.body.firstChild);
    }
  };

  useEffect(() => {
    initTheme();
    return () => {};
  }, [location.pathname]);

  return (
    <Layout className="basic-layout-container">
      <SliderMenu />
      <Layout className="basic-layout-content">
        <GlobalHeader />
        <Content className="basic-layout-wrapper">
          <BasicRoute />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
