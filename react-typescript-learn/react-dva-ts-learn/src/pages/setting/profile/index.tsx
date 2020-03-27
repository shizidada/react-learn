import React, { FunctionComponent, useState } from 'react'
import { Card, Button } from 'antd';

import ProfileDrawer from '../../../containers/setting/ProfileDrawer'

const ProfilePage: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Card>
      <Button onClick={() => setVisible(true)}> open </Button>
      <ProfileDrawer visible={visible} onCloseParentDrawer={setVisible} />
    </Card>
  )
}

export default ProfilePage;
