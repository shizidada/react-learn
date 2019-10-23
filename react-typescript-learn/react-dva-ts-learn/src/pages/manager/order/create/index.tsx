import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import CreateOrderForm from '../../../../components/order/CreateOrderForm';

import './index.less';

const { Meta } = Card;

export default class CreateOrderPage extends Component {
  public render() {
    return (
      <div className="create-order-container">
        <div className="create-order-wrapper">
          <Row gutter={16}>
            <Col span={18}>
              <CreateOrderForm />
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
