import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { ClickParam } from 'antd/lib/menu';
import { Icon, Menu, Dropdown, Avatar } from 'antd';

// import MooseBreadcrumb from '../MooseBreadcrumb';
import { ConnectState } from '../../typings';
import { getGlobalState } from '../../models/global';

import './index.less';

interface MooseGlobalHeaderProps extends ConnectState {
  onSliderMenuToggle: () => void;
}

class MooseGlobalHeader extends React.Component<MooseGlobalHeaderProps, {}> {
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
      <div className="moose-global-header-container">
        <span className="moose-global-header-trigger">
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => this.onHeaderTrigger()}
          />
        </span>
        {/* <MooseBreadcrumb /> */}

        <div className="moose-global-header-right">
          <Dropdown overlay={menu} trigger={['click']}>
            <span className="action">
              <Avatar className="avatar" size="small" icon="user" />
              <span>username</span>
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ConnectState) => getGlobalState(state);
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MooseGlobalHeader);
