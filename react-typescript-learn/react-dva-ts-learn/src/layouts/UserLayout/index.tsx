import React, { SFC } from 'react';
// import { Location } from "history";

import { Layout } from 'antd';

const { Content } = Layout;

export interface UserLayoutProps {
  view: React.ReactNode;
}

const UserLayout: SFC<UserLayoutProps> = ({ view }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Content>{view}</Content>
    </Layout>
  );
};

export default UserLayout;
