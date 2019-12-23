import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Card, Button, Statistic, Icon, Badge, Row, Col } from 'antd';

import DemoItem from '../../../../components/chart/DemoItem';
import ImportBrokenLine from '../../../../components/chart/ImportBrokenLine';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class OrderPage extends Component {
  public render() {
    return (
      <div>
        <Button>
          <Link to="order/create">创建</Link>
        </Button>

        <Row type="flex" justify="space-between">
          <Col span={5}>
            <Card loading={false}>
              <Statistic
                title="天猫"
                value={999.28}
                precision={2}
                valueStyle={{ color: 'red' }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card loading={false}>
              <Statistic
                title="咸鱼"
                value={999.28}
                precision={2}
                valueStyle={{ color: 'blank' }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={5}>
            <Card loading={false}>
              <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
            </Card>
          </Col>
          <Col span={5}>
            <Card loading={false}>
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="default" />
              <Badge status="processing" />
              <Badge status="warning" />
              <Badge status="success" text="Success" />
              <Badge status="error" text="Error" />
              <Badge status="default" text="Default" />
              <Badge status="processing" text="Processing" />
              <Badge status="warning" text="Warning" />
            </Card>
          </Col>
        </Row>

        <Row className="home-page-echart-row">
          <ImportBrokenLine />
        </Row>
        <DemoItem />
      </div>
    );
  }
}
