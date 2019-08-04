import React from 'react';
import { Layout, Icon, Row, Col, Avatar } from 'antd';

import MooseBreadcrumb from '../MooseBreadcrumb';
import './index.less';

const { Header } = Layout;

interface MooseHeaderProps {
  collapsed?: boolean;
  sliderMenuToggle?: () => void;
}

class MooseHeader extends React.Component<MooseHeaderProps, {}> {
  public render() {
    const { collapsed, sliderMenuToggle } = this.props;
    return (
      <Header className="moose-header">
        <Row>
          <Col span={2}>
            <Icon
              className="moose-header-trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={sliderMenuToggle}
            /></Col>
          <Col span={16}>
            <MooseBreadcrumb />
          </Col>
          <Col span={6} className="moose-header-userinfo">
            <Avatar size="large" icon="user" />
            <span className="username">username</span>
            <Icon className="arrow" type="caret-down" />
          </Col>
        </Row>
      </Header>
    )
  }
}

export default MooseHeader;
