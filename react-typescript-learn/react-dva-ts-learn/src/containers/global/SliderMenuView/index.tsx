import { Layout } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { MenuModelState } from '../../../models/menu';
// eslint-disable-next-line import/extensions
import { AppState } from '../../../typings';
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
    <Sider className="slider-menu-container" collapsed={collapsed} onCollapse={onSiderCollapseHandle}>
      <Link to="/index.html">
        <div className="slider-menu-logo">轻享</div>
      </Link>
      <BaseMenu />
    </Sider>
  );
};

export default connect(
  (state: AppState) => {
    return {
      ...state.menu
    };
  },
  (dispatch: Dispatch) => ({})
)(SliderMenu);
