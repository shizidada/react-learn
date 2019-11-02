import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

import { ConnectState } from '../../typings';
import { NAMESPACE, LoginModelState } from '../../models/login';

import './index.less';

interface LoginFormProps extends LoginModelState {
  form: WrappedFormUtils;
  updateLoginStore: (type: object) => void;
  login: (type: object) => void;
  redirect: () => void;
}
interface LoginFormState { }

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isLoginType } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // current is login status
        if (isLoginType) {
          if (values.username !== '' && values.password !== '') {
            this.props.login(values);
          }
        } else {
          // current is register status
        }
      }
    });
  };

  private changeType = () => {
    const type = this.props.isLoginType;
    this.props.updateLoginStore({ isLoginType: !type });
    this.props.form.resetFields();
  };

  /* eslint-disable @typescript-eslint/no-unused-vars, eslint-comments/disable-enable-pair  */
  // e: React.ChangeEvent<HTMLInputElement>
  private inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateLoginStore({ errorMessage: '' });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoginType, isLoading, errorMessage } = this.props;

    console.log('LoginForm :: ', this.props);
    return (
      <div className="login-form-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                onChange={e => this.inputChangeHandle(e)}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
                onChange={e => this.inputChangeHandle(e)}
              />,
            )}
          </Form.Item>

          {/* error tips */}
          {errorMessage !== '' && <span className="login-failed-message">{errorMessage}</span>}

          {!isLoginType && (
            <Form.Item>
              {getFieldDecorator('repassword', {
                rules: [{ required: true, message: '请再次输入密码!' }],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请再次输入密码"
                />,
              )}
            </Form.Item>
          )}

          {isLoginType && (
            <Form.Item className="login-form-register">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
              {/* eslint-disable no-script-url */}
              <a className="login-form-forgot" href="javascript:void(0)">
                忘记密码
              </a>
            </Form.Item>
          )}
          <Form.Item>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isLoginType ? '登录' : '注册'}
            </Button>
            <a href="javascript:void(0)" onClick={() => this.changeType()}>
              {isLoginType ? '注册' : '登录'}
            </a>
          </Form.Item>

          <Form.Item>
            <Button onClick={() => this.props.redirect()}>跳转</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(
  (state: ConnectState) => {
    return {
      ...state.login,
    }
  },
  (dispatch: Dispatch) => ({
    updateLoginStore(record: object) {
      dispatch({ type: `${NAMESPACE}/updateLoginStore`, payload: record });
    },
    login(record: object) {
      dispatch({ type: `${NAMESPACE}/login`, payload: record });
    },
    redirect() {
      dispatch({ type: `${NAMESPACE}/redirect` });
    },
  }),
)(Form.create({ name: 'login_form' })(LoginForm));
