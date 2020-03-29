import React, { FunctionComponent } from 'react';
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

const BaseMenu: FunctionComponent<BaseMenuProps> = ({
  changeSliderMenuSelect,
  menuData,
  selectedKeys,
  openKeys,
  rootSubmenuKeys,
}) => {
  const getNavMenuItems = (item: MenuConfig) => {
    return (
      <Menu.Item key={`${item.path}`} onClick={() => { }}>
        <Icon type={item.icon} />
        <span className="nav-text">{item.name}</span>
        <Link to={`${item.path}`}></Link>
      </Menu.Item>
    );
  };

  const getSubMenuOrItem = (item: MenuConfig) => {
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
              return getSubMenuOrItem(childItem);
            })}
        </SubMenu>
      );
    }
    return getNavMenuItems(item);
  };

  const onSliderOpenChange = (openKeyParams: string[]) => {
    const latestOpenKey = (openKeyParams.find(key => openKeys.indexOf(key) === -1) as string) || '';
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      changeSliderMenuSelect({ openKeys: openKeys as string[] });
    } else {
      changeSliderMenuSelect({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{ padding: '16px 0', width: '100%' }}
      defaultOpenKeys={openKeys}
      defaultSelectedKeys={selectedKeys}
      // selectedKeys={collapsed ? [] : selectedKeys}
      // openKeys={collapsed ? [] : openKeys}
      onOpenChange={onSliderOpenChange}
    >
      {menuData.map((item: MenuConfig) => {
        if (!item.children) {
          return getNavMenuItems(item);
        }
        return getSubMenuOrItem(item);
      })}
    </Menu>
  );
};
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
