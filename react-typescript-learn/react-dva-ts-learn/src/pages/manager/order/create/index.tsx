import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import OrderCreateForm from '../../../../components/order/OrderCreateForm';

import './index.less';

// const { Meta } = Card;

export default class OrderCreatePage extends Component {
  public render() {
    return (
      <div>
        <div>
          <Row gutter={16}>
            <Col span={18}>
              <OrderCreateForm />
            </Col>
            <Col span={6}>
              <Card title="Card title">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
