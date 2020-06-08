import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

// eslint-disable-next-line import/extensions
import { AppState } from '../../../typings';
// import { NAMESPACE } from '../../models/global/constants';
import { MenuModelState } from '../../../models/menu';
import { findNameByPath } from '../../../config/menu.util';

import './index.less';

interface MooseBreadcrumbProps extends MenuModelState {}

const MooseBreadcrumb: React.FunctionComponent<MooseBreadcrumbProps> = ({ selectedKeys }) => {
  const currentSelect: any = findNameByPath(selectedKeys);
  return (
    <Breadcrumb className="moose-breadcrumb-container">
      <Breadcrumb.Item>Moose</Breadcrumb.Item>
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
