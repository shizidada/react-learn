// import { Location } from "history";
import { Layout } from 'antd';
import React, { FunctionComponent } from 'react';
import IndexHeader from '../../containers/header/IndexHeader';
import './index.less';


const { Content, Footer } = Layout;

export interface UserLayoutProps {
  view: React.ReactNode;
}

const UserLayout: FunctionComponent<UserLayoutProps> = ({ view }) => {
  return (
    <Layout className="user-layout-container">
      <IndexHeader />
      <Content className="user-layout-content">{view}</Content>
      <Footer className="footer-container">create by 江景 2020</Footer>
    </Layout>
  );
};

export default UserLayout;
