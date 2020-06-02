import React, { FunctionComponent } from 'react';
// import { Location } from "history";

import { Layout } from 'antd';

const { Content } = Layout;

export interface UserLayoutProps {
  view: React.ReactNode;
}

const UserLayout: FunctionComponent<UserLayoutProps> = ({ view }) => {
  return (
    <Layout>
      <Content>{view}</Content>
    </Layout>
  );
};

export default UserLayout;
