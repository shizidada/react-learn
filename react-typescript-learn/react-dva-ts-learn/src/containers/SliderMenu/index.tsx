import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import { TitleEventEntity } from 'antd/lib/menu/SubMenu';

import { sliderMenus, SliderMenuConfig } from './slider-menu-config';

import './index.less';

import { GlobalState } from '../../typings';
// import { NAMESPACE } from '../../models/global/constants';
import { getGlobalState } from '../../models/global';

const mapStateToProps = (state: GlobalState) => getGlobalState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const { Sider } = Layout;
const { SubMenu } = Menu;

interface SliderMenuProps {
  collapsed: boolean;
  currentTab: string;
  onCollapse: (collapsed: boolean) => void;
  // onMenuSelect: (item: any, key: any, keyPath: any, selectedKeys: any, domEvent: any) => void;
}
interface SliderMenuState {}

class SliderMenu extends Component<SliderMenuProps, SliderMenuState> {
  public constructor(props: SliderMenuProps) {
    super(props);
    this.state = {};
  }

  private siderCollapseHandle = (collapsed: boolean) => {
    if (this.props.onCollapse) {
      this.props.onCollapse(collapsed);
    }
  };

  private sliderMenuItemClickHanlde = (params: SliderMenuConfig) => {
    // const parms: SliderMenuConfig = {
    //   ...payload,
    // };
    console.log('sliderMenuItemClickHanlde :: ', params);
    // this.props.addTabFromSlidMenu(parms);
  };

  // https://ant.design/components/menu-cn/
  private sliderMenuOpenChangeHanlde = (openKeys: string[]) => {
    console.log('sliderMenuOpenChangeHanlde :: ', openKeys);
    // const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   this.setState({ openKeys });
    // } else {
    //   this.setState({
    //     openKeys: latestOpenKey ? [latestOpenKey] : [],
    //   });
    // }
  };

  private sliderMenuSelectHanlde = (params: SelectParam) => {
    console.log('sliderMenuSelectHanlde :: ', params);
  };

  // key: string, domEvent: Event
  private sliderSubMenuTitleClickHanlde = (params: TitleEventEntity) => {
    console.log('sliderSubMenuTitleClickHanlde :: ', params);
  };

  public render() {
    console.log('SliderMenu render :: ', this.props);
    // const { currentTab } = this.props;
    return (
      <Sider
        className="slider-menu-container"
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.siderCollapseHandle}
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
          defaultSelectedKeys={['/bill']}
          defaultOpenKeys={['user']}
          // selectedKeys={['user']}
          // openKeys={['/bill']}
          onSelect={this.sliderMenuSelectHanlde}
          onOpenChange={this.sliderMenuOpenChangeHanlde}
        >
          {sliderMenus.map((item: SliderMenuConfig) => {
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
                  item.childs.map((childItem: SliderMenuConfig) => (
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
