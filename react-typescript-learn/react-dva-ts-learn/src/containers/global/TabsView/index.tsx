import React, { FunctionComponent } from 'react';
// , Icon, Row, Col, Avatar
import { Layout } from 'antd';

// import SortableComponent from './SortableComponent';

import './index.less';

const { Header } = Layout;

interface MooseTabsViewProps {}

const MooseTabsView: FunctionComponent<MooseTabsViewProps> = () => {
  return (
    <Header className="moose-tabs-view-container">
      {/* <SortableComponent /> */}
    </Header>
  );
};

export default MooseTabsView;
