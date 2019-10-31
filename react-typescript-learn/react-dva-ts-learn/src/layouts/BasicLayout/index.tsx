import React, { Component } from 'react';
import { Location } from 'history';
import { Layout } from 'antd';

import SliderMenu from '../../containers/SliderMenu';
import MooseGlobalHeader from '../../containers/MooseGlobalHeader';
import MooseTabsView from '../../containers/MooseTabsView';
import BasicRoute from '../../routers/BasicRoute';

import './index.less';

const { Header, Content, Footer } = Layout;

interface BasicLayoutProps {
  location: Location<any>;
}
interface BasicLayoutState {
  collapsed: boolean;
}

class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  public constructor(props: BasicLayoutProps) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  private sliderMenuToggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  private onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  public render() {
    console.log('BasicLayout :: ', this.props);
    return (
      <Layout>
        <SliderMenu collapsed={this.state.collapsed} onCollapse={this.onCollapse}></SliderMenu>
        <Layout style={{ minHeight: '100vh' }}>
          <MooseGlobalHeader />
          <MooseTabsView />
          <Content>
            <BasicRoute />
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
