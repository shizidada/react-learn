// import { Location } from "history";
import { Layout } from 'antd';
import React, { FunctionComponent } from 'react';
import IndexHeader from '../../containers/header/IndexHeader';

import './index.less';

const { Content } = Layout;

export interface UserLayoutProps {
  view: React.ReactNode;
}

const UserLayout: FunctionComponent<UserLayoutProps> = ({ view }) => {
  return (
    <Layout className="user-layout-container">
      <IndexHeader />
      <Content className="user-layout-content">{view}</Content>
    </Layout>
  );
};

export default UserLayout;
