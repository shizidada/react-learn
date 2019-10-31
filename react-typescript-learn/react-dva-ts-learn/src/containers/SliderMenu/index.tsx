import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import { TitleEventEntity } from 'antd/lib/menu/SubMenu';

import { menus, MenuConfig } from '../../config/menu-config';

import { GlobalState } from '../../typings';
import { NAMESPACE } from '../../models/global/constants';
import { GlobalModelState, getGlobalState } from '../../models/global';

import './index.less';

const mapStateToProps = (state: GlobalState) => getGlobalState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sliderMenuSelect(record: object) {
    dispatch({
      type: `${NAMESPACE}/updateGlobalStore`,
      payload: record,
    });
  },
});

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps extends GlobalModelState {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  sliderMenuSelect: (selectedKeys: object) => void;
}
interface SliderMenuState {}

class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  public constructor(props: SliderMenuProps) {
    super(props);
    this.state = {};
  }

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

  public componentDidMount = () => {
    this.findParentNodeNameByChild();
  };

  private siderCollapseHandle = (collapsed: boolean) => {
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  private sliderMenuItemClickHanlde = (params: MenuConfig) => {
    // const parms: SliderMenuConfig = {
    //   ...payload,
    // };
    console.log('sliderMenuItemClickHanlde :: ', params);
    // this.props.addTabFromSlidMenu(parms);
  };

  // https://ant.design/components/menu-cn/
  private sliderMenuOpenChangeHanlde = (openKeys: string[]) => {
    this.props.sliderMenuSelect({ openKeys });
    console.log('sliderMenuOpenChangeHanlde :: ', openKeys);
  };

  private sliderMenuSelectHanlde = (params: SelectParam) => {
    const { key, keyPath, selectedKeys, item, domEvent } = params;
    this.props.sliderMenuSelect({ selectedKeys });
    console.log('sliderMenuSelectHanlde :: ', key, keyPath, selectedKeys, item, domEvent);
  };

  // key: string, domEvent: Event
  private sliderSubMenuTitleClickHanlde = (params: TitleEventEntity) => {
    console.log('sliderSubMenuTitleClickHanlde :: ', params);
  };

  public render() {
    console.log('SliderMenu render :: ', this.props);
    const { selectedKeys, openKeys } = this.props;
    return (
      <Sider
        className="slider-menu-container"
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.siderCollapseHandle}
      >
        <div className="slider-menu-logo" />
        {/* light dark */}
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          selectedKeys={this.props.collapsed ? [] : selectedKeys}
          openKeys={this.props.collapsed ? [] : openKeys}
          onSelect={this.sliderMenuSelectHanlde}
          onOpenChange={this.sliderMenuOpenChangeHanlde}
        >
          {menus.map((item: MenuConfig) => {
            // , index: number
            if (!item.childs) {
              return (
                <Menu.Item
                  key={`${item.path}`}
                  onClick={() => this.sliderMenuItemClickHanlde(item)}
                >
                  <Icon type={item.type} />
                  <span className="nav-text">{item.name}</span>
                  <Link to={`${item.path}`}></Link>
                </Menu.Item>
              );
            }
            return (
              <SubMenu
                key={`${item.activeKey}`}
                onTitleClick={this.sliderSubMenuTitleClickHanlde}
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
                      onClick={() => this.sliderMenuItemClickHanlde(childItem)}
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
      </Sider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SliderMenu);
