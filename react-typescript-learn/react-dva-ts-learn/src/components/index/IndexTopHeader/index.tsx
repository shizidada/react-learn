import React from 'react';

import MainHeader from './MainHeader';

import './index.less';

const IndexTopHeader: React.FunctionComponent = () => {
  return (
    <div className="index-header-container">
      <MainHeader />
    </div>
  );
};

export default IndexTopHeader;
