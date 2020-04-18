import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Location } from 'history';
import { Form, Icon, Button, Typography, Divider } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import LoginForm from '../../../containers/login/LoginForm';
import RegisterForm from '../../../containers/register/RegisterForm';

import { ConnectState } from '../../../typings';
import { LoginModelState } from '../../../models/login';

import './index.less';
import Websocket from '../../../components/websocket';

const { Item } = Form;
const { Title } = Typography;

interface UserLoginPageProps extends LoginModelState, FormComponentProps {
  localtion: Location<{}>;
  updateLoginStore: (type: object) => void;
  login: (type: object) => void;
  register: (type: object) => void;
  redirect: () => void;
}

const UserLoginPage: React.FunctionComponent<UserLoginPageProps> = ({ form,
  loginType,
  isLoading,
  errorMessage,
  login,
  register,
  updateLoginStore }) => {
  const thirdAccountLogin = (type: string) => {
    console.log('thirdAccountLogin', type);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // current is login status
        if (loginType === 'login') {
          if (values.accountName !== '' && values.password !== '') {
            login(values);
          }
        } else {
          // current is register status
          if (values.phone === '') {
            return updateLoginStore({ errorMessage: '手机号码不能为空' });
          }

          if (values.password === '' || values.repassword === '') {
            return updateLoginStore({ errorMessage: '密码不能为空' });
          }

          if (values.password !== values.repassword) {
            return updateLoginStore({ errorMessage: '两次密码不一致' });
          }

          register(values);
          console.log('register :: ==> ', values);
        }
      }
    });
  };

  const changeType = () => {
    updateLoginStore({
      loginType: loginType === 'login' ? 'registe' : 'login',
      errorMessage: '',
    });
    form.resetFields();
  };

  const { getFieldDecorator } = form;
  return (
    <div className="login-page-container">
      <Form onSubmit={handleSubmit} className="login-form-wrapper">
        <Title level={2}>用户{loginType === 'login' ? '登录' : '注册'}</Title>
        {
          loginType === 'login' ? <LoginForm form={form} /> : <RegisterForm form={form} />
        }
        {/* error tips */}
        {errorMessage !== '' && <span className="login-failed-message">{errorMessage}</span>}
        <Item>
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="login-button"
          >
            {loginType === 'login' ? '登录' : '注册'}
          </Button>
        </Item>
        <div className="login-form-register">
          {/* eslint-disable-next-line no-script-url */}
          <a href="javascript:void(0)" onClick={() => changeType()}>
            {loginType === 'login' ? '立即注册' : '返回登录'}
          </a>
        </div>
        <Item className="login-third">
          <Divider />
          <Icon type="github" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('github')} />
          <Icon type="qq" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('qq')} />
          <Icon type="wechat" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('wechat')} />
        </Item>
      </Form>

      <Websocket />
    </div>
  );
};
export default connect(
  (state: ConnectState) => {
    return {
      ...state.login,
    };
  },
  (dispatch: Dispatch) => ({
    updateLoginStore(record: object) {
      dispatch({ type: 'login/updateLoginStore', payload: record });
    },
    login(record: object) {
      dispatch({ type: 'login/login', payload: record });
    },
    register(record: object) {
      dispatch({ type: 'login/register', payload: record });
    },
    redirect() {
      dispatch({ type: 'login/redirect' });
    },
  }),
)(Form.create({ name: 'UserLoginPage' })(UserLoginPage));
