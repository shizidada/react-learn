import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

import { GlobalState } from '../../typings';
// import { NAMESPACE } from '../../models/global/constants';
import { GlobalModelState, getGlobalState } from '../../models/global';

import { findNameByPath } from '../../config/menu-util';

import './index.less';

const mapStateToProps = (state: GlobalState) => getGlobalState(state);
const mapDispatchToProps = (dispatch: Dispatch) => ({});

interface MooseBreadcrumbProps extends GlobalModelState { }
interface MooseBreadcrumbState { }

class MooseBreadcrumb extends Component<MooseBreadcrumbProps, MooseBreadcrumbState> {
  public componentDidMount() {
    console.log('MooseBreadcrumb ', this.props)
  }

  public render() {
    const { selectedKeys } = this.props;
    const currentSelect: any = findNameByPath(selectedKeys)
    console.log('MooseBreadcrumb ', this.props, currentSelect, selectedKeys)

    return (
      <Breadcrumb className="moose-breadcrumb-container">
        <Breadcrumb.Item>Moose</Breadcrumb.Item>
        {
          currentSelect.parentName && <Breadcrumb.Item>{currentSelect.parentName}</Breadcrumb.Item>
        }
        {
          currentSelect.childName && <Breadcrumb.Item>{currentSelect.childName}</Breadcrumb.Item>
        }
      </Breadcrumb>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MooseBreadcrumb)
