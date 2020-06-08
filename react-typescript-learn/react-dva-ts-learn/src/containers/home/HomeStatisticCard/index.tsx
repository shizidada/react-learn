import React, { FunctionComponent } from 'react';
import { Card } from 'antd';

import './index.less';

interface HomeStatisticCardProps {
  title: string;
  content: string;
  styleType?: string;
}

const HomeStatisticCard: FunctionComponent<HomeStatisticCardProps> = ({ title, content, styleType }) => {
  return (
    <Card className={`home-statistic-card-container home-statistic-card-${styleType}`} title={title}>
      {content}
    </Card>
  );
};

export default HomeStatisticCard;
