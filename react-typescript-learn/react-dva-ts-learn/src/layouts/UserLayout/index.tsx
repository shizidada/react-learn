import React, { Component } from 'react';
// import { Location } from "history";

import { Layout } from 'antd';

const { Content } = Layout;

interface UserLayoutProps {
  view: React.ReactNode;
}

export default class UserLayout extends Component<UserLayoutProps, {}> {
  public render() {
    console.log('UserLayout :: ', this.props);
    const { view } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Content>{view}</Content>
      </Layout>
    );
  }
}
