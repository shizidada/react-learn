// , Icon, Row, Col, Avatar
import { Tabs } from 'antd';
import React, { FunctionComponent } from 'react';
// import SortableComponent from './SortableComponent';
import './index.less';


const { TabPane } = Tabs;

interface MooseTabsViewProps {}

const MooseTabsView: FunctionComponent<MooseTabsViewProps> = () => {
  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <Tabs className="tabs-view-container" defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default MooseTabsView;
