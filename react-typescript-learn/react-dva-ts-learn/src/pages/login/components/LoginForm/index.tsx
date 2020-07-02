import { Checkbox, Form, Icon, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { connect } from 'dva';
import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { LoginModelState } from '../../../../models/login';
import { AppState } from '../../../../typings';
import './index.less';

const { Item } = Form;

interface LoginFormProps extends LoginModelState {
  form: WrappedFormUtils;
  updateLoginStore: (type: object) => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ form, updateLoginStore }) => {
  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateLoginStore({ errorMessage: '' });
  };

  const { getFieldDecorator } = form;
  return (
    <div className="login-form-container">
      <Item>
        {getFieldDecorator('accountName', {
          initialValue: 'admin',
          rules: [{ required: true, message: '请输入用户名' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入用户名"
            onChange={e => inputChangeHandle(e)}
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          initialValue: 'admin',
          rules: [{ required: true, message: '请输入密码' }]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="请输入密码"
            onChange={e => inputChangeHandle(e)}
          />
        )}
      </Item>
      <Item className="login-remember-item">
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox>Remember Me</Checkbox>)}
        <span className="login-forgot-pwd">忘记密码</span>
      </Item>
    </div>
  );
};

export default connect(
  (state: AppState) => {
    return {
      ...state.login
    };
  },
  (dispatch: Dispatch) => ({
    updateLoginStore(record: object) {
      dispatch({ type: 'login/updateLoginStore', payload: record });
    }
  })
)(LoginForm);
