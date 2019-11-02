import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Layout } from 'antd';

import { ConnectState } from '../../typings';
import { NAMESPACE, GlobalModelState } from '../../models/global';
import BaseMenu from './BaseMenu';

import './index.less';

const { Sider } = Layout;

interface SliderMenuProps extends GlobalModelState {
  onCollapse: (collapsed: boolean) => void;
  sliderMenuSelect: (selectedKeys: object) => void;
}
interface SliderMenuState { }

class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  private onSiderCollapseHandle = (collapsed: boolean) => {
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  public render() {
    const { collapsed } = this.props;
    console.log('SliderMenu render :: ', this.props);
    return (
      <Sider
        className="slider-menu-container fixSiderbar"
        width={256}
        collapsible
        collapsed={collapsed}
        onCollapse={this.onSiderCollapseHandle}
      >
        <div className="slider-menu-logo" />
        <BaseMenu />
      </Sider>
    );
  }
}

export default connect(
  (state: ConnectState) => {
    return {
      ...state.global,
    }
  },
  (dispatch: Dispatch) => ({}),
)(SliderMenu);
