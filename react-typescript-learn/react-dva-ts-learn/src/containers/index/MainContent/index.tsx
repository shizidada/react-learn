import React, { FunctionComponent } from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import ImportBrokenLine from '../../../components/chart/ImportBrokenLine';

import './index.less';

const MainContent: FunctionComponent = () => {
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <Row gutter={[24, 24]}>
          <Col span={18}>
            <Skeleton avatar title loading />
            <Skeleton avatar title loading />
            <Skeleton avatar title loading />
            <ImportBrokenLine renderId="ImportBrokenLine_1" />
          </Col>

          <Col span={6}>
            <Card title="...">
              <Skeleton loading />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;
