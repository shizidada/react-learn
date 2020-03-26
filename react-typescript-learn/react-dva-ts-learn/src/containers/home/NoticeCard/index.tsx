import React, { FunctionComponent } from 'react';
import { Card } from 'antd';

import './index.less';

const NoticeCard: FunctionComponent = () => {
  return (
    <div className="notice-card-container">
      <Card title="公告" bordered>
        卧槽，不见了∑(っ°Д°;)っ卧槽，不见了
      </Card>
    </div>
  );
};

export default NoticeCard;
