import React, { FunctionComponent, useState } from 'react';
import { Form, Drawer, Button, Col, Row, Input, Select, Avatar } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import './index.less';

const { Option } = Select;

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
          <div className="drawer-avatar-item">
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

              <div className="upload-avatar-mask"></div>
            </label>
          </div>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Name">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please enter user name' }],
                })(<Input placeholder="Please enter user name" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Url">
                {getFieldDecorator('url', {
                  rules: [{ required: true, message: 'Please enter url' }],
                })(
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />,
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Owner">
                {getFieldDecorator('owner', {
                  rules: [{ required: true, message: 'Please select an owner' }],
                })(
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Type">
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: 'Please choose the type' }],
                })(
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Approver">
                {getFieldDecorator('approver', {
                  rules: [{ required: true, message: 'Please choose the approver' }],
                })(
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description">
                {getFieldDecorator('description', {
                  rules: [
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ],
                })(<Input.TextArea rows={4} placeholder="please enter url description" />)}
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
