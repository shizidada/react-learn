import * as React from 'react';
import { Card, Statistic, Icon, Badge, Row, Col, Tabs } from 'antd';

import DemoItem from '../../../components/chart/DemoItem';
import ImportBrokenLine from '../../../components/chart/ImportBrokenLine';
import BraftEditorForm from '../../../containers/home/BraftEditorForm';

import './index.less';

const { Countdown } = Statistic;
const { TabPane } = Tabs;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class HomePage extends React.Component {
  public callback = (activeKey: string) => {
    console.log(activeKey);
  };

  public render() {
    return (
      <React.Fragment>
        <Row gutter={[24, 24]} className="home-page-container">
          <Col span={19}>
            <Row gutter={[24, 24]}>
              <Col>
                <Card>
                  <BraftEditorForm />
                </Card>
              </Col>
            </Row>

            <Row gutter={[24, 24]}>
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

            <Row gutter={[24, 24]}>
              <Col>
                <Card>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="统计" key="1">
                      <Card>
                        <DemoItem />
                      </Card>
                    </TabPane>
                    <TabPane tab="平台" key="2">
                      <Row gutter={[20, 20]}>
                        <Col span={8}>
                          <Card>
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
                        <Col span={8}>
                          <Card>
                            <Statistic
                              title="咸鱼"
                              value={9.28}
                              precision={2}
                              valueStyle={{ color: 'blank' }}
                              prefix={<Icon type="arrow-down" />}
                              suffix="%"
                            />
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card>
                            <Statistic
                              title="京东"
                              value={439.28}
                              precision={2}
                              valueStyle={{ color: 'red' }}
                              prefix={<Icon type="arrow-up" />}
                              suffix="%"
                            />
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="秒杀" key="3">
                      <Card>
                        <Countdown title="倒计时" value={deadline} format="HH:mm:ss:SSS" />
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
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>

            <Row gutter={[24, 24]}>
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

          <Col span={5}>
            <Row gutter={[24, 24]}>
              <Col>
                <Card title="消息" bordered>
                  算我太迷糊 还有点偷懒 不要计较偶尔让我撒娇会怎样 有的时候一句话你说了三四遍
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col>
                <Card title="公告" bordered>
                  卧槽，不见了∑(っ°Д°;)っ卧槽，不见了
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col>
                <Card title="广告" bordered>
                  有的时候急急忙忙袜子会反穿 有的时候真的很想明天再洗豌
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
