import React, { FunctionComponent } from 'react';

import { Drawer, Divider, Col, Row } from 'antd';
import DescriptionItem from './DescriptionItem';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16
};

interface ProfileDrawerProps {
  showDrawer?: boolean;
  setShowDrawer: (showDrawer: boolean) => void;
}

const ProfileDrawer: FunctionComponent<ProfileDrawerProps> = ({ showDrawer, setShowDrawer }) => {
  return (
    <Drawer width={640} placement="right" closable={false} onClose={() => setShowDrawer(false)} visible={showDrawer}>
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
          <DescriptionItem title="Message" content="Make things as simple as possible but no simpler." />
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
          <DescriptionItem title="Skills" content="Java etc." />
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
            content={<a href="http://github.com/ant-design/ant-design/">github.com/ant-design/ant-design/</a>}
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default ProfileDrawer;
