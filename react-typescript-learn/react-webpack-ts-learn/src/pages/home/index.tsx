import React, { FunctionComponent, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import H from 'history';

import TabBarView from '../../containers/TabBarView';

import { EXAMPLE_URL } from '../../config';

import './index.less';

interface HomePageProps {
  history: H.History;
}

const HomePage: FunctionComponent<HomePageProps> = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.replace('/login');
      return;
    }
  });

  return <TabBarView />;
};
export default withRouter(HomePage);
