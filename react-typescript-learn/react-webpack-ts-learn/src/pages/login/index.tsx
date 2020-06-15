import React, { FunctionComponent, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import H from 'history';

import {
  Flex,
  WingBlank,
  WhiteSpace,
  InputItem,
  Button,
  Checkbox,
  Toast
} from 'antd-mobile';

import './index.less';

interface LoginPageProps {
  history: H.History;
}

const AgreeItem = Checkbox.AgreeItem;

const LoginPage: FunctionComponent<LoginPageProps> = ({ history, ...rest }) => {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(accountName, password);
    if (!accountName) {
      Toast.info('请输入账号');
      return;
    }
    if (!password) {
      Toast.info('请输入密码');
      return;
    }

    if ('admin' !== accountName && '123' !== password) {
      Toast.info('账号或密码错误');
      return;
    }
    Toast.loading('正在登录中...', 3, () => {
      history.replace('/');
    });
    localStorage.setItem('token', 'qpd921n1m31nm3nm');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.replace('/');
      return;
    }
  });

  return (
    <div className="login-page" style={{ minHeight: 667 }}>
      <div className="wrapper">
        <div>
          <div className="login-header"></div>
          <span className="logo-image">FaS</span>
          <WingBlank>
            <InputItem
              placeholder="请输入账号"
              clear
              maxLength={50}
              onChange={(value: any) => setAccountName(value)}
            ></InputItem>
            <WhiteSpace />
            <InputItem
              placeholder="请输入密码"
              type="password"
              clear
              maxLength={32}
              onChange={(value: any) => setPassword(value)}
            ></InputItem>
            <WhiteSpace />
            <Flex>
              <Flex.Item>
                <AgreeItem onChange={e => console.log('checkbox', e)}>
                  记住账号
                </AgreeItem>
              </Flex.Item>
              <Flex.Item>忘记密码</Flex.Item>
            </Flex>
            <WhiteSpace />
            <Button type="primary" onClick={handleLogin}>
              登录
            </Button>
          </WingBlank>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
