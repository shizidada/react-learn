import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { Link } from 'dva/router';
import { connect } from 'dva';
// import { SelectParam } from 'antd/lib/menu';
// import { TitleEventEntity } from 'antd/lib/menu/SubMenu';
import { Menu, Icon } from 'antd';
import { isEmpty } from 'lodash';

// eslint-disable-next-line import/extensions
import { AppState, SliderMenuConfig } from '../../../typings';
import { MenuModelState } from '../../../models/menu';
import { GlobalModelState } from '../../../models/global';

const { SubMenu } = Menu;

interface BaseMenuProps extends MenuModelState, GlobalModelState {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  changeSliderMenuSelect: (selectedKeys: object) => void;
  updateGlobalStore: (record: object) => void;
}

const BaseMenu: FunctionComponent<BaseMenuProps> = ({
  changeSliderMenuSelect,
  menuData,
  selectedKeys,
  openKeys,
  rootSubMenuKeys,
  globalTabs,
  updateGlobalStore,
}) => {
  const sliderMenuItemClick = (item: SliderMenuConfig) => {
    const existItem = globalTabs.filter((tab: SliderMenuConfig) => tab.name === item.name);
    if (isEmpty(existItem)) {
      globalTabs.push(item);
      updateGlobalStore({ globalTabs, activeKey: item.activeKey });
    } else {
      updateGlobalStore({ activeKey: item.activeKey });
    }
  };

  const getNavMenuItems = (item: SliderMenuConfig) => {
    return (
      <Menu.Item key={`${item.path}`} onClick={() => sliderMenuItemClick(item)}>
        <Icon type={item.icon} />
        <span className="nav-text">{item.name}</span>
        <Link to={`${item.path}`}></Link>
      </Menu.Item>
    );
  };

  const getSubMenuOrItem = (item: SliderMenuConfig) => {
    if (item.hide) {
      return null;
    }
    if (item.children) {
      return (
        <SubMenu
          key={`${item.path}`}
          onTitleClick={() => {}}
          title={
            <span className="nav-text">
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {item.children &&
            item.children.map((childItem: SliderMenuConfig) => {
              return getSubMenuOrItem(childItem);
            })}
        </SubMenu>
      );
    }
    return getNavMenuItems(item);
  };

  const onSliderOpenChange = (openKeyParams: string[]) => {
    console.log('openKeyParams :: ', openKeyParams);
    const latestOpenKey = (openKeyParams.find(key => openKeys.indexOf(key) === -1) as string) || '';
    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
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
      {menuData.map((item: SliderMenuConfig) => {
        if (!item.children) {
          return getNavMenuItems(item);
        }
        return getSubMenuOrItem(item);
      })}
    </Menu>
  );
};
export default connect(
  (state: AppState) => {
    return {
      ...state.menu,
      ...state.global,
    };
  },
  (dispatch: Dispatch) => ({
    changeSliderMenuSelect(record: object) {
      dispatch({
        type: 'menu/updateMenuStore',
        payload: record,
      });
    },
    updateGlobalStore(record: object) {
      dispatch({
        type: 'global/updateGlobalStore',
        payload: record,
      });
    },
  }),
)(BaseMenu);
