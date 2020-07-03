import { Button, Form, Typography } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { connect } from 'dva';
import { Location } from 'history';
import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { LoginModelState } from '../../models/login';
import { AppState } from '../../typings';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './index.less';

const { Item } = Form;
const { Title } = Typography;

interface UserLoginPageProps extends LoginModelState, FormComponentProps {
  location: Location<{}>;
  updateLoginStore: (type: object) => void;
  login: (type: object) => void;
  register: (type: object) => void;
  redirect: () => void;
}

const UserLoginPage: React.FunctionComponent<UserLoginPageProps> = ({
  form,
  loginType,
  isLoading,
  errorMessage,
  login,
  register,
  updateLoginStore
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
      errorMessage: ''
    });
    form.resetFields();
  };

  const thirdAccountLogin = (type: string) => {
    console.log('thirdAccountLogin', type);
  };

  useEffect(() => {
    require('../../components/CircleCanvas');
  });

  return (
    <div id="wrapper">
      <canvas id="canvas" width="1950px" height="900px"></canvas>
      <canvas id="canvasbg" width="1950px" height="900px"></canvas>
      <div className="login-page-container">
        <Form onSubmit={handleSubmit} className="login-form-wrap">
          <div className="login-logo-wrap">
            <Title level={2}>{loginType === 'login' ? 'Login' : 'Register'}</Title>
          </div>
          {loginType === 'login' ? <LoginForm form={form} /> : <RegisterForm form={form} />}
          {/* error tips */}
          {errorMessage !== '' && <span className="login-failed-message">{errorMessage}</span>}
          <Item>
            <Button loading={isLoading} size="large" type="primary" htmlType="submit" className="login-button">
              {loginType === 'login' ? 'Login' : 'Register'}
            </Button>
          </Item>

          {/* <Item className="login-form-register">
            <span onClick={() => changeType()}>{loginType === 'login' ? 'Register' : 'Login'}</span>
          </Item> */}

          {/* <Item className="login-third">
            <Divider />
            <Icon type="github" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('github')} />
            <Icon type="qq" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('qq')} />
            <Icon type="wechat" style={{ fontSize: 20 }} onClick={() => thirdAccountLogin('wechat')} />
          </Item> */}
        </Form>
      </div>
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
    },
    login(record: object) {
      dispatch({ type: 'login/login', payload: record });
    },
    register(record: object) {
      dispatch({ type: 'login/register', payload: record });
    },
    redirect() {
      dispatch({ type: 'login/redirect' });
    }
  })
)(Form.create({ name: 'UserLoginPage' })(UserLoginPage));
