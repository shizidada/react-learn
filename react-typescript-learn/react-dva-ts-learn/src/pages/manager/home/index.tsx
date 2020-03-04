import * as React from 'react';
import { Card, Statistic, Icon, Badge, Row, Col } from 'antd';

import DemoItem from '../../../components/chart/DemoItem';
import ImportBrokenLine from '../../../components/chart/ImportBrokenLine';
import BraftEditorForm from '../../../containers/home/BraftEditorForm';

import './index.less';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class HomePage extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Row gutter={20} className="home-page-container">
          <Col span={18}>
            <Row gutter={[20, 20]}>
              <Col span={8}>
                <Card>
                  <ImportBrokenLine renderId="ImportBrokenLine_1" />
                </Card>
              </Col>
              <Col span={16}>
                <Card>
                  <ImportBrokenLine renderId="ImportBrokenLine_2" />
                </Card>
              </Col>
            </Row>

            <Row gutter={[20, 20]}>
              <Col span={12}>
                <Card>
                  <DemoItem />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="天猫"
                    value={999.28}
                    precision={2}
                    valueStyle={{ color: 'red' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                  />
                  <Statistic
                    title="咸鱼"
                    value={-9.28}
                    precision={2}
                    valueStyle={{ color: 'blank' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
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

            <Row gutter={[20, 20]}>
              <Col span={12}>1111</Col>
              <Col span={12}>2222</Col>
            </Row>
          </Col>

          <Col span={6}>
            <Card>
              <BraftEditorForm />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
