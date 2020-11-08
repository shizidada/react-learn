// import { Location } from "history";
import { Layout } from 'antd';
import React, { FunctionComponent } from 'react';
import IndexHeader from '../../pages/index/components/IndexHeader';
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
      <Footer className="footer-container">©轻享 {new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default UserLayout;
