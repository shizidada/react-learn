import { Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { connect } from 'dva';
import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { LoginModelState } from '../../../../models/login';
import { AppState } from '../../../../typings';

const { Item } = Form;
const { Search } = Input;

interface RegisterFormProps extends FormComponentProps, LoginModelState {
  updateLoginStore: (type: object) => void;
}

const RegisterForm: FunctionComponent<RegisterFormProps> = ({ form, isLoading, updateLoginStore }) => {
  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateLoginStore({ errorMessage: '' });
  };

  const { getFieldDecorator } = form;
  return (
    <React.Fragment>
      <Item>
        {getFieldDecorator('phone', {
          initialValue: '17812345678',
          rules: [{ required: true, message: '请输入手机号码' }]
        })(
          <Input
            type="text"
            maxLength={11}
            size="large"
            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入手机号码"
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
            minLength={6}
            maxLength={20}
            size="large"
            placeholder="请输入密码"
            onChange={e => inputChangeHandle(e)}
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('repassword', {
          initialValue: 'admin',
          rules: [{ required: true, message: '请再次输入密码' }]
        })(
          <Input.Password
            minLength={6}
            maxLength={20}
            size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="请再次输入密码"
          />
        )}
      </Item>

      <Item>
        {getFieldDecorator('verifyCode', {
          rules: [{ required: true, message: '请输入验证码' }]
        })(
          <Search
            placeholder="请输入验证码"
            enterButton="发送验证码"
            size="large"
            maxLength={6}
            // onSearch={value => console.log(value)}
          />
        )}
      </Item>
    </React.Fragment>
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
)(Form.create({ name: 'RegisterForm' })(RegisterForm));
