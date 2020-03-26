import React, { FunctionComponent } from 'react';
import { Card, Statistic, Icon, Badge, Row, Col, Tabs } from 'antd';

import DemoItem from '../../../components/chart/DemoItem';

const { Countdown } = Statistic;
const { TabPane } = Tabs;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

interface TabContentCardProps {}

const TabContentCard: FunctionComponent<TabContentCardProps> = () => {
  const callback = (activeKey: string) => {
    console.log(activeKey);
  };

  return (
    <Card>
      <Tabs defaultActiveKey="1" onChange={callback}>
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
  );
};

export default TabContentCard;
