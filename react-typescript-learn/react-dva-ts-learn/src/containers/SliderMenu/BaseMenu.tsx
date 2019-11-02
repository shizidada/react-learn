import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { Link } from 'dva/router';
import { connect } from 'dva';
// import { SelectParam } from 'antd/lib/menu';
// import { TitleEventEntity } from 'antd/lib/menu/SubMenu';
import { Menu, Icon } from 'antd';

import { ConnectState } from '../../typings';
import { NAMESPACE, GlobalModelState } from '../../models/global';
import { menus, MenuConfig } from '../../config/menu.config';

const { SubMenu } = Menu;

interface BaseMenuProps extends GlobalModelState {
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
        if (parentItem.childs) {
          parentItem.childs.find(childItem => {
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

  public render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
      >
        {menus.map((item: MenuConfig) => {
          // , index: number
          if (!item.childs) {
            return (
              <Menu.Item key={`${item.path}`} onClick={() => { }}>
                <Icon type={item.type} />
                <span className="nav-text">{item.name}</span>
                <Link to={`${item.path}`}></Link>
              </Menu.Item>
            );
          }
          return (
            <SubMenu
              key={`${item.activeKey}`}
              onTitleClick={() => { }}
              title={
                <span className="nav-text">
                  <Icon type={item.type} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {item.childs &&
                item.childs.map((childItem: MenuConfig) => (
                  <Menu.Item
                    key={`${childItem.path}`}
                    onClick={() => { }}
                  >
                    <Icon type={childItem.type} />
                    <span className="nav-text">{childItem.name}</span>
                    <Link to={`${childItem.path}`}></Link>
                  </Menu.Item>
                ))}
            </SubMenu>
          );
        })}
      </Menu>
    );
  }
}
export default connect(
  (state: ConnectState) => {
    return {
      ...state.global,
    }
  },
  (dispatch: Dispatch) => ({
    sliderMenuSelect(record: object) {
      dispatch({
        type: `${NAMESPACE}/updateGlobalStore`,
        payload: record,
      });
    },
  }),
)(BaseMenu);
