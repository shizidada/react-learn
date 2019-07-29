import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';

import { menus, SliderMenuConfig } from './slider-menu-config';

import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}
interface SliderMenuState {}

export default class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  public constructor(props: SliderMenuProps) {
    super(props);
    this.state = {};
  }

  private onCollapse = (collapsed: boolean) => {
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  private menuItemClick = (payload: SliderMenuConfig) => {
    const parms: SliderMenuConfig = {
      ...payload,
    };
    console.log('SliderMenu menuItemClick :: ', parms);
    // this.props.addTabFromSlidMenu(parms);
  };

  public render() {
    return (
      <Sider
        className="slider-menu-container"
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="slider-logo" />
        {/* light dark */}
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["/"]}
          // selectedKeys={[`${"/"}`]}
          // openKeys={[`${currentTab}`]}
        >
          {menus.map((item: SliderMenuConfig, index: number) => {
            if (!item.childs) {
              return (
                <Menu.Item key={`${item.path}`} onClick={() => this.menuItemClick(item)}>
                  <Icon type={item.type} />
                  <span className="nav-text">{item.name}</span>
                  <Link to={`${item.path}`}></Link>
                </Menu.Item>
              );
            }
            return (
              <SubMenu
                key={`${item.activeKey}`}
                title={
                  <span className="nav-text">
                    <Icon type={item.type} />
                    <span>{item.name}</span>
                  </span>
                }
              >
                {item.childs &&
                  item.childs.map((item: SliderMenuConfig) => {
                    return (
                      <Menu.Item key={`${item.activeKey}`} onClick={() => this.menuItemClick(item)}>
                        <Icon type={item.type} />
                        <span className="nav-text">{item.name}</span>
                        <Link to={`${item.path}`}></Link>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}
