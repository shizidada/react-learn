import React, { Component } from 'react';
import { Card } from 'antd';

import './index.less';

export default class MessageCard extends Component {
  render() {
    return (
      <div className="message-card-container">
        <Card title="消息" bordered>
          算我太迷糊 还有点偷懒 不要计较偶尔让我撒娇会怎样 有的时候一句话你说了三四遍
        </Card>
      </div>
    );
  }
}
