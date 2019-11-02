import * as React from 'react';
import { Card, Avatar } from 'antd';

import { HOCConfig } from '../../../hoc/HOCConfig';

import './index.less';

const { Meta } = Card;

@HOCConfig({
  permission: false,
})
export default class HomePage extends React.Component<any> {
  public render() {
    console.log('HomePage :: ', this.props);
    return (
      <div>
        <div>
          {new Array(15).fill('temp').map((item, index) => (
            <Card key={`${index + item}`} loading={false}>
              <Meta
                title="Card title"
                description="This is the description"
                avatar={
                  <Avatar src="" />
                }
              />
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
