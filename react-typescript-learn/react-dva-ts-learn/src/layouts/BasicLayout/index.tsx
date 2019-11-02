import React, { Component } from 'react';
import { Location } from 'history';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { Layout } from 'antd';
import SliderMenu from '../../containers/SliderMenu';
import GlobalHeader from '../../containers/GlobalHeader';
import TabsView from '../../containers/TabsView';
import BasicRoute from '../../routers/BasicRoute';

import { ConnectState } from '../../typings';

import './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps extends ConnectState {
  location: Location<any>;
  updateMenuStore: (collapsed: object) => void;
}
interface BasicLayoutState { }

class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  private getLayoutStyle = () => {
    const { collapsed } = this.props;
    return {
      paddingLeft: collapsed ? '80px' : '256px',
    };
  };

  private getContentStyle = () => {
    return {
      margin: '24px 24px 0',
    }
  }

  private onSliderMenuToggle = () => {
    const { collapsed } = this.props;
    this.props.updateMenuStore({ collapsed: !collapsed });
  };

  public render() {
    console.log('BasicLayout :: ', this.props);
    return (
      <Layout>
        <SliderMenu />
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: '100vh',
          }}
        >
          <GlobalHeader onSliderMenuToggle={this.onSliderMenuToggle} />
          <TabsView />
          <Content style={this.getContentStyle()}>
            <BasicRoute />
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Created by 江景</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  // state: ConnectState
  ({ global, menu }: ConnectState) => ({
    ...menu,
  }),
  (dispatch: Dispatch) => ({
    updateMenuStore(record: object) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    },
  }),
)(BasicLayout);
