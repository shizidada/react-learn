import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../typings';
// import { NAMESPACE } from '../../models/global/constants';
import { MenuModelState } from '../../models/menu';
import { findNameByPath } from '../../config/menu.util';

import './index.less';

interface MooseBreadcrumbProps extends MenuModelState { }
interface MooseBreadcrumbState { }

class MooseBreadcrumb extends Component<MooseBreadcrumbProps, MooseBreadcrumbState> {
  public componentDidMount() {
    console.log('MooseBreadcrumb ', this.props);
  }

  public render() {
    const { selectedKeys } = this.props;
    console.log('MooseBreadcrumb ', this.props);
    const currentSelect: any = findNameByPath(selectedKeys);
    console.log('MooseBreadcrumb ', this.props, currentSelect, selectedKeys);

    return (
      <Breadcrumb className="moose-breadcrumb-container">
        <Breadcrumb.Item>Moose</Breadcrumb.Item>
        {currentSelect.parentName && <Breadcrumb.Item>{currentSelect.parentName}</Breadcrumb.Item>}
        {currentSelect.childName && <Breadcrumb.Item>{currentSelect.childName}</Breadcrumb.Item>}
      </Breadcrumb>
    );
  }
}

export default connect(
  ({ menu }: ConnectState) => {
    return {
      ...menu,
    }
  },
  (dispatch: Dispatch) => ({}),
)(MooseBreadcrumb);
