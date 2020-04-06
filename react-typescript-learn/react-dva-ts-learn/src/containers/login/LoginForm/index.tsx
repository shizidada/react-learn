import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Icon, Input, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';
import { LoginModelState } from '../../../models/login';

import './index.less';

const { Item } = Form;

interface LoginFormProps extends LoginModelState {
  form: WrappedFormUtils,
  updateLoginStore: (type: object) => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({
  form,
  updateLoginStore,
}) => {
  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateLoginStore({ errorMessage: '' });
  };

  const { getFieldDecorator } = form;
  return (
    <div className="login-form-container">
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
      <Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>记住我</Checkbox>)}
        {/* eslint-disable-next-line no-script-url */}
        <a className="login-form-forgot" href="javascript:void(0)">忘记密码</a>
      </Item>
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
  }),
)(LoginForm);
