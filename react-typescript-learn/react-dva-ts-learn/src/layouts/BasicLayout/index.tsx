import React, { FunctionComponent, useEffect } from 'react';
import { Layout } from 'antd';
import { BASE_NAME } from '../../config/less.config';
import DraggableTabView from '../../containers/global/DraggableTabView';
import SliderMenuView from '../../containers/global/SliderMenuView';
import ManagerHeader from '../../pages/home/components/ManagerHeader';
import BasicRoute from '../../routers/BasicRoute';
import { AppState } from '../../typings';
import './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends AppState {
}

const OLD_LESS_ID = `less:${BASE_NAME ? `${BASE_NAME}-` : ''}color:old`;

const BasicLayout: FunctionComponent<BasicLayoutProps> = ({ location, history, login }) => {
  // 初始化主题？
  const initTheme = () => {
    const themeStyleContent = window.localStorage.getItem('THEME_STYLE_CONTENT');
    if (themeStyleContent) {
      const oldStyle = document.getElementById(OLD_LESS_ID);
      if (oldStyle) return;
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
  });

  return (
    <Layout className="basic-layout-container">
      <SliderMenuView />
      <Layout className="basic-layout-content">
        <ManagerHeader />
        <DraggableTabView history={history} />
        <Content className="basic-layout-wrapper">
          <BasicRoute />
        </Content>
        <Footer style={{ textAlign: 'center' }}>©轻享 {new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
