import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Layout } from 'antd';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import { MenuModelState } from '../../../models/menu';
import BaseMenu from './BaseMenu';

import './index.less';

const { Sider } = Layout;

interface SliderMenuProps extends MenuModelState {
  onCollapse: (collapsed: boolean) => void;
  sliderMenuSelect: (selectedKeys: object) => void;
}

const SliderMenu: FunctionComponent<SliderMenuProps> = ({ collapsed, onCollapse }) => {
  const onSiderCollapseHandle = (isCollapsed: boolean) => {
    if (onCollapse) {
      onCollapse(isCollapsed);
    }
  };

  return (
    <Sider
      className="slider-menu-container"
      collapsed={collapsed}
      onCollapse={onSiderCollapseHandle}
    >
      <div className="slider-menu-logo" />
      <BaseMenu />
    </Sider>
  );
};

export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({}),
)(SliderMenu);
