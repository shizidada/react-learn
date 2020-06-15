import React, { FunctionComponent } from 'react';
import { WhiteSpace } from 'antd-mobile';

import './index.less';

const MyContent: FunctionComponent = () => {
  return (
    <div className="my-content-box">
      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <span className="avatar">江景</span>
      <p>here test demo</p>
    </div>
  );
};

export default MyContent;
