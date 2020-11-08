import { Breadcrumb } from 'antd';
import { connect } from 'dva';
import React from 'react';
import { Dispatch } from 'redux';
import { findNameByPath } from '../../../config/menu.util';
import { MenuModelState } from '../../../models/menu';
import { AppState } from '../../../typings';
import './index.less';

interface MooseBreadcrumbProps extends MenuModelState {}

const MooseBreadcrumb: React.FunctionComponent<MooseBreadcrumbProps> = ({ selectedKeys }) => {
  const currentSelect: any = findNameByPath(selectedKeys);
  return (
    <Breadcrumb className="breadcrumb-container">
      <Breadcrumb.Item>轻享</Breadcrumb.Item>
      {currentSelect.parentName && <Breadcrumb.Item>{currentSelect.parentName}</Breadcrumb.Item>}
      {currentSelect.childName && <Breadcrumb.Item>{currentSelect.childName}</Breadcrumb.Item>}
    </Breadcrumb>
  );
};

export default connect(
  ({ menu }: AppState) => {
    return {
      ...menu
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (dispatch: Dispatch) => ({})
)(MooseBreadcrumb);
