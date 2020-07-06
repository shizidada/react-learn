import { Button, Card, Col, Row } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import CouponCard from '../../../components/common/CouponCard';
import ContentItem from './components/ContentItem';
import './index.less';

const coupons = [
  {
    id: 10001,
    money: 2000,
    rebate: 3000,
    unit: '元',
    type: 'rebate',
    date: '2908.12.22'
  },
  {
    id: 10002,
    money: 860,
    rebate: 288,
    unit: '元',
    type: 'preferential',
    date: '2912.02.22'
  },
  {
    id: 10003,
    money: 1000,
    rebate: 600,
    unit: '元',
    type: 'rebate',
    date: '2902.02.22'
  },
  {
    id: 10004,
    money: 6000,
    rebate: 8800,
    unit: '元',
    type: 'preferential',
    date: '2902.07.03'
  }
];

const MainContent: FunctionComponent = () => {
  const [contentList, setContentList] = useState<string[]>(['1', '2', '3', '4', '5']);

  const [couponInfo, setCouponInfo] = useState();

  const handleAddContent = () => {
    const temp = contentList.concat();
    temp.unshift(`${Date.now()}`);
    setContentList(temp);
  };

  const handleCleanContent = () => {
    setContentList([]);
  };

  const handleSelectCoupon = (info: any) => {
    setCouponInfo(info);
  };

  return (
    <div className="main-content-container">
      <div className="main-content-wrapper">
        <Row>
          <Col span={16} className="content-left">
            {contentList.length > 0 && (
              <TransitionGroup>
                {contentList.map((item: string, index: number) => {
                  return <ContentItem key={item} transitionIn={index >= 0} />;
                })}
              </TransitionGroup>
            )}
            <div className="coupon-card-container">
              {coupons.map(item => {
                return (
                  <CouponCard
                    key={String(item.id)}
                    info={item}
                    couponInfo={couponInfo}
                    onSelectCoupon={() => handleSelectCoupon(item)}
                  />
                );
              })}
            </div>
          </Col>

          <Col span={7} className="content-right">
            <Card title="About">
              <Button onClick={handleAddContent}>ADD</Button>
              <Button onClick={handleCleanContent}>CLEAN</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;
