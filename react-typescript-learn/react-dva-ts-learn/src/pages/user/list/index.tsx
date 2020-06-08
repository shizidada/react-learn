import React, { FunctionComponent, useState } from 'react';
import { List, Avatar, Card } from 'antd';

import userList from './user.json';
import UserProfileDrawer from '../../../containers/user/UserProfileDrawer';

const UserListPage: FunctionComponent = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Card>
      <List
        dataSource={userList}
        bordered
        renderItem={item => (
          <List.Item
            key={item.name}
            actions={[
              <a onClick={() => setShowDrawer(true)} key={`a-${item.name}`}>
                View Profile
              </a>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <UserProfileDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </Card>
  );
};

export default UserListPage;
