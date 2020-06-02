import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';

import { ConnectState } from '../../typings';

import './lodash.test';

import './index.less';

interface IndexPageProps extends ConnectState {}

const IndexPage: FunctionComponent<IndexPageProps> = ({ home }) => {
  return <div className="index-page-container">IndexPage</div>;
};

export default connect(
  (state: ConnectState) => {
    return {
      home: state.home,
    };
  },
  (dispatch: Dispatch) => ({}),
)(IndexPage);
