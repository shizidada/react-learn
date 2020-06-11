import React, { FunctionComponent } from 'react';
import { Checkbox } from 'antd';

import './index.less';

interface CouponProps {
  info: any;
  couponInfo: any;
  onSelectCoupon: () => void;
}

const CouponCard: FunctionComponent<CouponProps> = ({ info = {}, couponInfo = {}, onSelectCoupon }) => {
  return (
    <div className="coupon-card" onClick={() => onSelectCoupon()}>
      <div className="coupon-wrapper">
        <div className="left">
          <span className="money">
            {info.money} <span className="unit">{info.unit}</span>
          </span>
        </div>
        <div className="right">
          <span className="checkbox">
            <Checkbox id="cb" checked={couponInfo.id === info.id} />
          </span>
          <span className="new">{info.type === 'rebate' ? '满减券' : '优惠券'}</span>
          <span className="limit">满{info.rebate}可用</span>
          <span className="date">有效期至{info.date}</span>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
