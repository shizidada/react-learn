import React, { FunctionComponent } from 'react';

import './index.less';

const ContentItem: FunctionComponent = () => {
  return (
    <div className="content-box">
      <div className="info-box">
        <div className="info-row">
          <ul className="meta-list">
            <li className="item post">VIP</li>
            <li className="item username">江景</li>
            <li className="item">1小时前</li>
            <li className="item tag">Java/SpringBoot</li>
          </ul>
        </div>

        <div className="info-row title-row">
          <a href="" className="title">
            微服务项目中如何管理依赖版本号？
          </a>
        </div>

        <div className="action-row">
          <ul className="action-list">
            <li>点赞 (999)</li>
            <li className="comment">评论 (78)</li>
          </ul>
        </div>
      </div>

      <div className="thumb"></div>
    </div>
  );
};

export default ContentItem;
