import React from 'react';
import { Layout, Icon, Row, Col, Menu, Dropdown, Avatar } from 'antd';

import MooseBreadcrumb from '../MooseBreadcrumb';
import './index.less';
import { ClickParam } from 'antd/lib/menu';

const { Header } = Layout;

interface MooseGlobalHeaderProps {
  collapsed?: boolean;
  sliderMenuToggle?: () => void;
}

class MooseGlobalHeader extends React.Component<MooseGlobalHeaderProps, {}> {
  onMenuClick = (param: ClickParam) => {
    console.log(param);
  };

  public render() {
    const { collapsed, sliderMenuToggle } = this.props;
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
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={sliderMenuToggle} />
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

export default MooseGlobalHeader;
