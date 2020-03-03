import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { ClickParam } from 'antd/lib/menu';
import { Icon, Menu, Dropdown, Avatar, Row, Col } from 'antd';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import MooseBreadcrumb from '../Breadcrumb';

import './index.less';

interface MooseGlobalHeaderProps extends ConnectState {
  onSliderMenuToggle: () => void;
  updateGlobalStore: () => void;
}

class MooseGlobalHeader extends React.Component<MooseGlobalHeaderProps, {}> {
  componentDidMount() {
    console.log('MooseGlobalHeader ', this.props);
    this.props.updateGlobalStore();
  }

  private onMenuClick = (param: ClickParam) => {
    console.log(param);
  };

  private onHeaderTrigger = () => {
    this.props.onSliderMenuToggle();
  };

  public render() {
    const { collapsed } = this.props;
    const menu = (
      <Menu className="moose-global-header-menu" selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Row className="moose-global-header-container">
        <Col span={2}>
          <span className="moose-global-header-trigger"
            onClick={() => this.onHeaderTrigger()}>
            <Icon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
            />
          </span>
        </Col>
        <Col span={6}>
          <MooseBreadcrumb />
        </Col>

        <Col span={16} className="moose-global-header-right">
          <Dropdown overlay={menu} trigger={['click']}>
            <span className="action">
              <Avatar className="avatar" size="small" icon="user" />
              <span>admin</span>
            </span>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}

export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({
    updateGlobalStore(record: object = {}) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    },
  }),
)(MooseGlobalHeader);
