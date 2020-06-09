import React, { FunctionComponent } from 'react';

import './index.less';

const CouponCard: FunctionComponent = () => {
  return (
    <div className="coupon-card">
      <div className="coupon-wrapper">
        <div className="left">
          <span className="money">
            2000 <span className="unit">K</span>
          </span>
        </div>
        <div className="right">
          <span className="new">满减券</span>
          <span className="limit">满3000可用</span>
          <span className="date">有效期至2902.02.22</span>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
