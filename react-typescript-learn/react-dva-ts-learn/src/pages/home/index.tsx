import { Card, Col, Row, Alert } from 'antd';
import React, { FunctionComponent } from 'react';
import ImportBrokenLine from '../../components/chart/ImportBrokenLine';
import HomeStatisticCard from '../../containers/home/HomeStatisticCard';
import TabContentCard from '../../containers/home/TabContentCard';
import UserActivityList from '../../containers/home/UserActivityList';
import './index.less';

const HomePage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <HomeStatisticCard title="新增用户" content="8798" styleType="new-add-user" />
        </Col>
        <Col span={8}>
          <HomeStatisticCard title="累计用户" content="78819321" styleType="cumulative-user" />
        </Col>
        <Col span={8}>
          <HomeStatisticCard title="累计订单" content="3910239021" styleType="cumulative-order" />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="home-page-container">
        <Col span={16}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <ImportBrokenLine renderId="ImportBrokenLine_1" />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col>
              <TabContentCard />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
            <Col span={6}>
              <Card>Card</Card>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <UserActivityList />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
