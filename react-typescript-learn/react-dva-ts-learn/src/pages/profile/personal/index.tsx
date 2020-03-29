import React, { FunctionComponent, useState } from 'react'
import { Card, Button } from 'antd';

import PersonalSettingDrawer from '../../../containers/profile/PersonalSettingDrawer'

const PersonalCenterPage: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)

  return <Card>
    <Button onClick={() => setVisible(true)}> open </Button>
    <PersonalSettingDrawer visible={visible} onCloseParentDrawer={setVisible} />
  </Card>
}

export default PersonalCenterPage
