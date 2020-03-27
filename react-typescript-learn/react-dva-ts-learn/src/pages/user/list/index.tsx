import React, { FunctionComponent, useState } from 'react'
import { Drawer, List, Avatar, Divider, Col, Row, Card } from 'antd'

import userList from './user.json';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

interface DescriptionItemProps {
  title: string;
  content: JSX.Element | string
}

const DescriptionItem: FunctionComponent<DescriptionItemProps> = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

const UserListPage: FunctionComponent = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (<Card>
    <List dataSource={userList}
      bordered
      renderItem={item => (
        <List.Item
          key={item.name}
          actions={[
            <a onClick={() => setShowDrawer(true)} key={`a-${item.name}`}>
              View Profile
                </a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            }
            title={<a href="https://ant.design/index-cn">{item.name}</a>}
            description="Progresser XTech"
          />
        </List.Item>
      )} />

    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={() => setShowDrawer(false)}
      visible={showDrawer}
    >
      <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
      <p style={pStyle}>Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content="江景" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Account" content="江景" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="BEIJING" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="China🇨🇳" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </Col>
      </Row>
      <Divider />
      <p style={pStyle}>Company</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>https://github.com/shizidada</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="Java etc."
          />
        </Col>
      </Row>
      <Divider />
      <p style={pStyle}>Contacts</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Email" content="shizidada@gmail.com" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Phone Number" content="+86 199 0000 0000" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
                  </a>
            }
          />
        </Col>
      </Row>
    </Drawer>
  </Card>)
}

export default UserListPage
