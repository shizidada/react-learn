import React, { Component } from 'react';
import { Location } from 'history';
import { Layout } from 'antd';

import SliderMenu from '../../containers/SliderMenu';
import MooseHeader from '../../containers/MooseHeader';
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

        {/*  style={{ marginLeft: this.state.collapsed ? 80 : 200 }} */}
        <Layout>
          <MooseHeader collapsed={this.state.collapsed} sliderMenuToggle={this.sliderMenuToggle} />

          <Header className="basic-layout-header basic-layout-header-tabs">
            will fill click menu generator tab
          </Header>

          <Content className="basic-layout-content">
            <div className="basic-layout-content-wrapper">
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
