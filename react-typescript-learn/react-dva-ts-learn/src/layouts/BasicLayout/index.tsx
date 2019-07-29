import React, { Component } from 'react';
import { Location } from 'history';
import { Layout, Breadcrumb, Icon } from 'antd';

import SliderMenu from '../../containers/SliderMenu';
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
      <Layout className="basic-layout-container" style={{ minHeight: '100vh' }}>
        <SliderMenu collapsed={this.state.collapsed} onCollapse={this.onCollapse}></SliderMenu>

        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
          <Header className="basic-layout-header basic-layout-header-top">
            <Icon
              className="basic-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.sliderMenuToggle}
            />
          </Header>

          <Header className="basic-layout-header basic-layout-header-tabs">
            will fill click menu generator tab
          </Header>

          <Content className="basic-layout-content">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Moose</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <BasicRoute />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
