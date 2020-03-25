import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, Divider, message } from 'antd';
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
interface LoginFormState {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { loginType, updateLoginStore } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // current is login status
        if (loginType === 'login') {
          if (values.accountName !== '' && values.password !== '') {
            this.props.login(values);
          }
        } else {
          // current is register status
          if (values.accountName !== '' && values.password !== '' && values.repassword !== '') {
            if (values.password === values.repassword) {
              this.props.register(values);
            } else {
              updateLoginStore({ errorMessage: '两次密码不一致' });
            }
          }
          console.log('register :: ==> ', values);
        }
      }
    });
  };

  private changeType = () => {
    const { loginType } = this.props;
    this.props.updateLoginStore({
      loginType: loginType === 'login' ? 'registe' : 'login',
      errorMessage: '',
    });
    this.props.form.resetFields();
  };

  private inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateLoginStore({ errorMessage: '' });
  };

  private thirdAccountLogin = (type: string) => {
    console.log('thirdAccountLogin', type);
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { loginType, isLoading, errorMessage } = this.props;

    console.log('LoginForm :: ', this.props);
    return (
      <div className="login-form-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3>用户{loginType === 'login' ? '登录' : '注册'}</h3>
          <Item>
            {getFieldDecorator('accountName', {
              initialValue: 'admin',
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                onChange={e => this.inputChangeHandle(e)}
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
                onChange={e => this.inputChangeHandle(e)}
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
            <a href="javascript:void(0)" onClick={() => this.changeType()}>
              {loginType === 'login' ? '立即注册' : '返回登录'}
            </a>
          </div>
          <Item className="login-form-third">
            <Divider />
            <Icon type="github" onClick={() => this.thirdAccountLogin('github')} />
            <Icon type="qq" onClick={() => this.thirdAccountLogin('qq')} />
            <Icon type="wechat" onClick={() => this.thirdAccountLogin('wechat')} />
          </Item>
        </Form>
      </div>
    );
  }
}

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
