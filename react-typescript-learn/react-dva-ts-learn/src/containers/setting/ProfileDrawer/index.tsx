import React, { FunctionComponent, useState } from 'react'
import { Drawer, Button } from 'antd'

interface OpenDrawerProps {
  visible?: boolean;
  onCloseParentDrawer?: (visible: boolean) => void;
}

const OpenDrawer: FunctionComponent<OpenDrawerProps> = ({ visible, onCloseParentDrawer }) => {
  const [childrenDrawer, setChildrenDrawer] = useState(false)

  const onClose = () => {
    if (onCloseParentDrawer) onCloseParentDrawer(false)
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true)
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false)
  };


  return (
    <Drawer
      title="Multi-level drawer"
      width={520}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Button type="primary" onClick={showChildrenDrawer}>
        Two-level drawer
    </Button>
      <Drawer
        title="Two-level Drawer"
        width={320}
        closable={false}
        onClose={onChildrenDrawerClose}
        visible={childrenDrawer}
      >
        This is two-level drawer
    </Drawer>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }}
      >
        <Button
          style={{
            marginRight: 8,
          }}
          onClick={onClose}
        >
          Cancel
      </Button>
        <Button onClick={onClose} type="primary">
          Submit
      </Button>
      </div>
    </Drawer>
  )
}

export default OpenDrawer
