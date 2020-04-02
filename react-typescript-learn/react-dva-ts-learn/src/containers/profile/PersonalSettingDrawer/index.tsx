import React, { FunctionComponent, useState } from 'react';
import { Form, Drawer, Button, Col, Row, Input, Typography, Radio, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import './index.less';

const { Title } = Typography;

interface PersonalSettingDrawerProps extends FormComponentProps {
  visible?: boolean;
  onClosePersonalSetting?: (visible: boolean) => void;
}

const PersonalSettingDrawer: FunctionComponent<PersonalSettingDrawerProps> = ({
  visible,
  onClosePersonalSetting,
  form,
}) => {
  const onCloseEditProfile = () => {
    if (onClosePersonalSetting) onClosePersonalSetting(false);
  };

  const { getFieldDecorator } = form;

  return (
    <Drawer
      className="personal-setting-drawer-container"
      visible={visible}
      width={640}
      closable={false}
      title="编辑个人资料"
      onClose={onCloseEditProfile}
    >
      <div className="personal-setting-drawer-body">
        <Form layout="vertical">
          <Row className="drawer-avatar-item">
            <div className="drawer-avatar-box">
              <div className="user-avatar">
                <img
                  width={160}
                  height={160}
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                  alt=""
                />
              </div>
              <label htmlFor="upload-avatar-input">
                <input
                  id="upload-avatar-input"
                  className="upload-avatar"
                  type="file"
                  accept="image/png,image/jpeg"
                />
                <div className="upload-avatar-mask-box">
                  <div className="mask-inner"></div>
                  <div className="mask-content">
                    <Icon type="camera" style={{ fontSize: 32 }} />
                    <div className="avatar-editor-text">修改我的头像</div>
                  </div>
                </div>
              </label>
            </div>
          </Row>

          <Row gutter={16} className="account-name-item">
            <Col span={24}>
              <Title>Tom</Title>
              {/* <Form.Item>
                {getFieldDecorator('accountName', {
                  initialValue: 'Tom',
                })(<Input />)}
              </Form.Item> */}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="个人简介">
                {getFieldDecorator('description', {
                  initialValue: '但行好事，莫问前程。',
                })(<Input.TextArea rows={4} />)}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="personal-setting-drawer-footer">
        <Button style={{ marginRight: 8 }} onClick={onCloseEditProfile}>
          取消
        </Button>
        <Button onClick={onCloseEditProfile} type="primary">
          提交
        </Button>
      </div>
    </Drawer>
  );
};

export default Form.create<PersonalSettingDrawerProps>({ name: 'PersonalSettingDrawer' })(
  PersonalSettingDrawer,
);
