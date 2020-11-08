import { Button, Card, Col, Empty, Row } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import ContentItem from './components/ContentItem';
import './index.less';

const MainContent: FunctionComponent = () => {
  const [contentList, setContentList] = useState<string[]>(['1', '2', '3']);

  const handleAddContent = () => {
    const temp = contentList.concat();
    temp.unshift(`${Date.now()}`);
    setContentList(temp);
  };

  const handleCleanContent = () => {
    setContentList([]);
  };

  return (
    <div className="main-content-container">
      <div className="main-content-wrapper">
        <Row>
          <Col span={16} className="content-left">
            {contentList.length > 0 ? (
              contentList.map((item: string, index: number) => {
                return <ContentItem key={item} transitionIn={index >= 0} />;
              })
            ) : (
              <Empty />
            )}
          </Col>

          <Col span={7} className="content-right">
            <Card title="About">
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
