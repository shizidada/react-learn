import { Layout } from 'antd';
import React, { FunctionComponent } from 'react';

import './index.less';

const { Content } = Layout;

export interface BlankLayoutProps {
  view: React.ReactNode;
}

const BlankLayout: FunctionComponent<BlankLayoutProps> = ({ view }) => {
  return (
    <Layout className="blank-layout-container">
      <Content>{view}</Content>
    </Layout>
  );
};

export default BlankLayout;
