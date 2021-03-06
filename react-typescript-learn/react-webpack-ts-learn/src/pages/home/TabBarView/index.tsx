import React, { FunctionComponent, useState } from 'react';
import { TabBar } from 'antd-mobile';

import IndexContent from '../IndexContent';
import MyContent from '../MyContent';

const TabBarView: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState('My');
  const [hiddenTabBar, setHiddenTabBar] = useState(true);
  return (
    <div
      style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        hidden={hiddenTabBar}
        prerenderingSiblingsNumber={0}
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selected={selectedTab === 'Life'}
          // badge={1}
          onPress={() => {
            setSelectedTab('Life');
          }}
          data-seed="logId"
        >
          <IndexContent />
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          title="Koubei"
          key="Koubei"
          // badge={'new'}
          selected={selectedTab === 'Koubei'}
          onPress={() => {
            setSelectedTab('Koubei');
          }}
          data-seed="logId1"
        >
          Koubei
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          title="Friend"
          key="Friend"
          // dot
          selected={selectedTab === 'Friend'}
          onPress={() => {
            setSelectedTab('Friend');
          }}
        >
          Friend
        </TabBar.Item>
        <TabBar.Item
          icon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
          }}
          selectedIcon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
          }}
          title="My"
          key="my"
          selected={selectedTab === 'My'}
          onPress={() => {
            setSelectedTab('My');
          }}
        >
          <MyContent />
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default TabBarView;
