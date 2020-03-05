import React, { Component } from 'react';
import { Card, Carousel } from 'antd';

import './index.less';

export default class AdvertisementCard extends Component {
  render() {
    return (
      <div className="advertisement-card-container">
        <Card title="广告" bordered>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
