import React, { FunctionComponent, useState } from 'react';
import { Row, Col, Card, Button, Skeleton } from 'antd';
import { TransitionGroup } from 'react-transition-group';

import ContentItem from '../../../components/content/ContentItem';

import './index.less';

const MainContent: FunctionComponent = () => {
  const [contentList, setContentList] = useState<string[]>([`${Date.now()}`]);

  const handleAddContent = () => {
    const temp = contentList.concat();
    temp.unshift(`${Date.now()}`);
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
            {contentList.length > 0 && (
              <TransitionGroup>
                {contentList.map((item: string, index: number) => {
                  return <ContentItem key={item} transitionIn={index >= 0} />;
                })}
              </TransitionGroup>
            )}
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
