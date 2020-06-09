import React, { FunctionComponent } from 'react';

import './index.less';

const RowItem: FunctionComponent = () => {
  return (
    <div className="row-item">
      <div className="wrapper">
        <a href="">
          <div className="item-content">
            <h4>6月11日 晚 8:00 | 测试标题 测试标题 测试标题 测试标题 测试标题</h4>
            <div className="descript">测试描述测试描述测试描述测试描述</div>
          </div>
          <div className="item-image"></div>
        </a>
      </div>
      <p>声网Agora发布于Agora Talk06-08 11:08</p>
    </div>
  );
};

export default RowItem;
