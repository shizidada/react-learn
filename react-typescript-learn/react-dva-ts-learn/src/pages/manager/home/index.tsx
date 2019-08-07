import * as React from 'react';
import { Card, Avatar } from 'antd';

import { config } from '../../../common/config';

import Counter from '../../../containers/Counter';

import './index.less';

const { Meta } = Card;

@config({
  permission: true,
})
export default class HomePage extends React.Component<any> {
  public render() {
    console.log('HomePage :: ', this.props);
    return (
      <div className="home-page-container">
        <div className="home-top-wrapper">
          {/*  style={{ width: 300, marginTop: 16 }}  */}
          {
            new Array(5).fill('temp').map((item, index) => (
              <Card key={`${index + item}`} style={{ margin: '0 10px' }} loading={false}>
                <Meta
                  title="Card title"
                  description="This is the description"
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                />
              </Card>
            ))
          }
        </div>
        <Counter />
      </div>
    );
  }
}