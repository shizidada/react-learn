import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { Link } from 'dva/router';
import { connect } from 'dva';
// import { SelectParam } from 'antd/lib/menu';
// import { TitleEventEntity } from 'antd/lib/menu/SubMenu';
import { Menu, Icon } from 'antd';

import { ConnectState } from '../../typings';
import { MenuModelState } from '../../models/menu';
import { menus, MenuConfig } from '../../config/menu.config';

const { SubMenu } = Menu;

interface BaseMenuProps extends MenuModelState {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  sliderMenuSelect: (selectedKeys: object) => void;
}
interface BaseMenuState { }

class BaseMenu extends Component<BaseMenuProps, BaseMenuState> {
  public componentDidMount = () => {
    this.findParentNodeNameByChild();
  };

  private findParentNodeNameByChild = () => {
    const { selectedKeys } = this.props;
    selectedKeys.map(selectedKey => {
      menus.map((parentItem, parentIndex) => {
        if (parentItem.children) {
          parentItem.children.find(childItem => {
            if (`${childItem.path}` === selectedKey) {
              // current path find parent node to open
              // config file must have activeKey #see slider-menu-config.ts
              this.props.sliderMenuSelect({ openKeys: [menus[parentIndex].activeKey] });
            }
          });
        }
      });
    });
  };

  private getNavMenuItems = (item: MenuConfig) => {
    return <Menu.Item key={`${item.path}`} onClick={() => { }}>
      <Icon type={item.icon} />
      <span className="nav-text">{item.name}</span>
      <Link to={`${item.path}`}></Link>
    </Menu.Item>
  }

  private getSubMenuOrItem = (item: MenuConfig) => {
    if (item.children) {
      return <SubMenu
        key={`${item.activeKey}`}
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
            return this.getSubMenuOrItem(childItem)
          })}
      </SubMenu>
    }
    return this.getNavMenuItems(item);
  }

  private renderBaseMenu = () => {
    // const { selectedKeys, openKeys } = this.props;
    return <Menu
      theme="dark"
      mode="inline"
      // selectedKeys={selectedKeys}
      // openKeys={openKeys}
      style={{ padding: '16px 0', width: '100%' }}
    >
      {menus.map((item: MenuConfig) => {
        if (!item.children) {
          return this.getNavMenuItems(item);
        }
        return this.getSubMenuOrItem(item);
      })}
    </Menu>
  }

  public render() {
    return this.renderBaseMenu();
  }
}
export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    }
  },
  (dispatch: Dispatch) => ({
    sliderMenuSelect(record: object) {
      dispatch({
        type: 'menu/updateMenuStore',
        payload: record,
      });
    },
  }),
)(BaseMenu);
