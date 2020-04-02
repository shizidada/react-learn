import React, { FunctionComponent, useState } from 'react';
import { Form, Drawer, Button, Col, Row, Input, Typography, Tooltip, Divider, Radio, Icon } from 'antd';
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
  const [isEditorAccount, setIsEditorAccount] = useState(false)
  const [isEditorIntroduce, setIsEditorIntroduce] = useState(false)

  const onCloseEditProfile = () => {
    if (onClosePersonalSetting) onClosePersonalSetting(false);
  };

  const onEditorAccount = () => {
    setIsEditorAccount(true)
  }

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
        <Form layout="horizontal">
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

          {
            isEditorAccount ?
              <Row gutter={16} type="flex" align="middle" className="profile-info-item">
                <Col span={4} className="info-prefix">用户名</Col>
                <Row className="profile-info-input-item">
                  <Col className="input-item"><Input /></Col>
                  <Row type="flex" align="middle" justify="space-between">
                    <Col className="buttons-item">
                      <Button type="primary">保存</Button>
                      <Button onClick={() => setIsEditorAccount(false)}>取消</Button>
                      <Tooltip title="180 天后可再次修改">
                        <Icon type="question-circle" style={{ marginLeft: 8 }} />
                      </Tooltip>
                    </Col>
                  </Row>
                </Row>
              </Row>
              :
              <Row gutter={16} type="flex" align="middle" className="account-name-item">
                <Col span={4} className="account-name">Tom</Col>
                <Col span={14} className="editor" onClick={onEditorAccount}><Icon type="edit" />修改</Col>
              </Row>
          }
          <Divider />
          <Row gutter={16} type="flex" align="middle" className="profile-info-item">
            <Col span={4} className="info-prefix">性别</Col>
            <Col className="info">男</Col>
            <Col className="editor"><Icon type="edit" />修改</Col>
          </Row>
          <Divider />
          <Row gutter={16} type="flex" align="middle" className="profile-info-item">
            <Col span={4} className="info-prefix">手机号</Col>
            <Col className="info">13777777777</Col>
            <Col className="editor"><Icon type="edit" />修改</Col>
          </Row>
          <Divider />
          <Row gutter={16} type="flex" align="middle" className="profile-info-item">
            <Col span={4} className="info-prefix">个人认证<Icon type="question-circle" style={{ marginLeft: 8 }} /></Col>
            <Col className="info"></Col>
            <Col className="cursor"><a href="#">申请个人认证<Icon type="right" /></a></Col>
          </Row>
          <Divider />
          <Row gutter={16} type="flex" align="middle" className="profile-info-item">
            <Col span={4} className="info-prefix">个人简介</Col>
            {
              isEditorIntroduce ? null : <Col className="info">但行好事，莫问前程。</Col>
            }
            {
              isEditorIntroduce ? <Col className="introduce-item"><Input.TextArea value="但行好事，莫问前程。" /></Col> :
                <Col className="editor" onClick={() => setIsEditorIntroduce(true)}><Icon type="edit" />修改</Col>
            }
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
