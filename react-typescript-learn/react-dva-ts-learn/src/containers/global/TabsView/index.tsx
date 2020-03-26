import React, { FunctionComponent } from 'react';
// , Icon, Row, Col, Avatar
import { Layout } from 'antd';

import './index.less';

const { Header } = Layout;

interface MooseTabsViewProps {}

const MooseTabsView: FunctionComponent<MooseTabsViewProps> = () => {
  return <Header className="moose-tabs-view-container">will fill click menu generator tab</Header>;
};

export default MooseTabsView;
