import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import { LoginModelState } from '../../../models/login';

import './index.less';

const { Item } = Form;

interface LoginFormProps extends LoginModelState {
  form: WrappedFormUtils;
  updateLoginStore: (type: object) => void;
  login: (type: object) => void;
  register: (type: object) => void;
  redirect: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({
  form,
  loginType,
  isLoading,
  errorMessage,
  login,
  register,
  updateLoginStore,
}) => {
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
          if (values.accountName !== '' && values.password !== '' && values.repassword !== '') {
            if (values.password === values.repassword) {
              register(values);
            } else {
              updateLoginStore({ errorMessage: '两次密码不一致' });
            }
          }
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

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateLoginStore({ errorMessage: '' });
  };

  const thirdAccountLogin = (type: string) => {
    console.log('thirdAccountLogin', type);
  };

  const { getFieldDecorator } = form;
  return (
    <div className="login-form-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h3>用户{loginType === 'login' ? '登录' : '注册'}</h3>
        <Item>
          {getFieldDecorator('accountName', {
            initialValue: 'admin',
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
              onChange={e => inputChangeHandle(e)}
            />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            initialValue: 'admin',
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
              onChange={e => inputChangeHandle(e)}
            />,
          )}
        </Item>

        {loginType === 'registe' && (
          <Item>
            {getFieldDecorator('repassword', {
              initialValue: 'admin',
              rules: [{ required: true, message: '请再次输入密码' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请再次输入密码"
              />,
            )}
          </Item>
        )}

        {loginType === 'registe' && (
          <Item>
            {getFieldDecorator('phone', {
              initialValue: '17812345678',
              rules: [{ required: true, message: '请输入手机号码' }],
            })(
              <Input
                type="text"
                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入手机号码"
              />,
            )}
          </Item>
        )}

        {/* error tips */}
        {errorMessage !== '' && <span className="login-failed-message">{errorMessage}</span>}

        {loginType === 'login' && (
          <Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            {/* eslint-disable-next-line no-script-url */}
            <a className="login-form-forgot" href="javascript:void(0)">
              忘记密码
            </a>
          </Item>
        )}
        <Item>
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
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
        <Item className="login-form-third">
          <Divider />
          <Icon type="github" onClick={() => thirdAccountLogin('github')} />
          <Icon type="qq" onClick={() => thirdAccountLogin('qq')} />
          <Icon type="wechat" onClick={() => thirdAccountLogin('wechat')} />
        </Item>
      </Form>
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
)(Form.create({ name: 'login_form' })(LoginForm));
