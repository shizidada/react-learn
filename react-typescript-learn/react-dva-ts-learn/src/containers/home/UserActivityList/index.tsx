import React, { FunctionComponent } from 'react';
import { Card, List, Avatar } from 'antd';

import userList from './user-activity.json';

const UserActivityList: FunctionComponent = () => {
  return (
    <Card title="今日活跃用户">
      <List
        dataSource={userList}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              <a onClick={() => console.log('View Profile')} key={`a-${item.name}`}>
                查看
              </a>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
              title={<a href="https://github.com/shizidada">{item.name}</a>}
              description="2025-12-23 18:21:56"
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UserActivityList;
