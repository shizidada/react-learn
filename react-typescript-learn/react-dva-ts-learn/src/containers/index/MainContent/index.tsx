import React, { FunctionComponent } from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import ImportBrokenLine from '../../../components/chart/ImportBrokenLine';

import './index.less';
import ContentItem from '../../../components/content/ContentItem';

const MainContent: FunctionComponent = () => {
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <Row gutter={[24, 24]}>
          <Col span={18}>
            <Skeleton avatar title loading />
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ImportBrokenLine renderId="ImportBrokenLine_1" />
          </Col>

          <Col span={6}>
            <Card title="About">
              <Skeleton loading />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;
