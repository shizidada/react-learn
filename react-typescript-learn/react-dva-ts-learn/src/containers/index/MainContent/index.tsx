import React, { FunctionComponent, useState } from 'react';
import { Row, Col, Card, Button, Skeleton } from 'antd';

import './index.less';
import ContentItem from '../../../components/content/ContentItem';

const MainContent: FunctionComponent = () => {
  const [contentList, setContentList] = useState<string[]>([`${Date.now()}`]);

  const handleAddContent = () => {
    const temp = contentList.concat();
    temp.push(`${Date.now()}`);
    setContentList(temp);
  };

  const handleCleanContent = () => {
    setContentList([]);
  };

  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <Row gutter={[24, 24]}>
          <Col span={18}>
            <Skeleton avatar title loading />
            {contentList.map((item: string) => {
              return <ContentItem key={item} />;
            })}
          </Col>

          <Col span={6}>
            <Card title="About">
              <Skeleton loading />
              <Button onClick={handleAddContent}>ADD</Button>
              <Button onClick={handleCleanContent}>CLEAN</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;
