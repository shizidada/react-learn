import * as React from 'react';
import { Card, Statistic, Icon, Badge, Row, Col } from 'antd';

import { HOCConfig } from '../../../hoc/HOCConfig';

import './index.less';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

@HOCConfig({
  permission: false,
})
export default class HomePage extends React.Component<any> {
  public render() {
    console.log('HomePage :: ', this.props);
    return (
      <div className="home-page-container">
        <Row type="flex" justify="space-between">
          <Col span={8} >
            {new Array(1).fill('').map((item, index) => (
              <Card key={`${index + item}`} loading={false}>
                <Statistic
                  title="Active"
                  value={999.28}
                  precision={2}
                  valueStyle={{ color: 'red' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            ))}
          </Col>
          <Col span={8}>
            <Card loading={false}>
              <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
            </Card>
          </Col>
          <Col span={7}>
            <Card loading={false}>
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="default" />
              <Badge status="processing" />
              <Badge status="warning" />
              <br />
              <Badge status="success" text="Success" />
              <br />
              <Badge status="error" text="Error" />
              <Badge status="default" text="Default" />
              <Badge status="processing" text="Processing" />
              <Badge status="warning" text="Warning" />
            </Card>
          </Col>
        </Row>

        <Row className="home-page-echart-row">

        </Row>
      </div>
    );
  }
}
