import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { Link } from 'dva/router';
import { connect } from 'dva';
// import { SelectParam } from 'antd/lib/menu';
// import { TitleEventEntity } from 'antd/lib/menu/SubMenu';
import { Menu, Icon } from 'antd';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import { MenuModelState } from '../../../models/menu';
import { MenuConfig } from '../../../config/menu.config';

const { SubMenu } = Menu;

interface BaseMenuProps extends MenuModelState {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  changeSliderMenuSelect: (selectedKeys: object) => void;
}
interface BaseMenuState { }

class BaseMenu extends Component<BaseMenuProps, BaseMenuState> {
  public componentDidMount = () => { };

  private getNavMenuItems = (item: MenuConfig) => {
    return (
      <Menu.Item key={`${item.path}`} onClick={() => { }}>
        <Icon type={item.icon} />
        <span className="nav-text">{item.name}</span>
        <Link to={`${item.path}`}></Link>
      </Menu.Item>
    );
  };

  private getSubMenuOrItem = (item: MenuConfig) => {
    if (item.children) {
      return (
        <SubMenu
          key={`${item.path}`}
          onTitleClick={() => { }}
          title={
            <span className="nav-text">
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {item.children &&
            item.children.map((childItem: MenuConfig) => {
              return this.getSubMenuOrItem(childItem);
            })}
        </SubMenu>
      );
    }
    return this.getNavMenuItems(item);
  };

  private onSliderOpenChange = (openKeys: string[]) => {
    const latestOpenKey =
      (openKeys.find(key => this.props.openKeys.indexOf(key) === -1) as string) || '';
    if (this.props.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.props.changeSliderMenuSelect({ openKeys: openKeys as object });
    } else {
      this.props.changeSliderMenuSelect({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
  };

  public render() {
    const { collapsed, selectedKeys, openKeys, menuData } = this.props;
    return (
      <Menu
        theme="dark"
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectedKeys}
        // selectedKeys={collapsed ? [] : selectedKeys}
        // openKeys={collapsed ? [] : openKeys}
        onOpenChange={this.onSliderOpenChange}
      >
        {menuData.map((item: MenuConfig) => {
          if (!item.children) {
            return this.getNavMenuItems(item);
          }
          return this.getSubMenuOrItem(item);
        })}
      </Menu>
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
    changeSliderMenuSelect(record: object) {
      dispatch({
        type: 'menu/updateMenuStore',
        payload: record,
      });
    },
  }),
)(BaseMenu);
