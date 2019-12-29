import React, { useState } from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./index.less";

const { ipcRenderer } = window.require('electron');

function LoginFrom(props) {
  const { isFail, setFail } = useState(false);
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        if (username !== 'admin' || password !== 'admin') {
          setFail(true);
          return;
        }
        ipcRenderer.send('moose-login-success');
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "请输入用户名!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="请输入用户名"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "请输入密码!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="请输入密码"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("autoLogin", {
          valuePropName: "checked",
          initialValue: false
        })(<Checkbox>自动登录</Checkbox>)}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="">新用户注册</a>
      </Form.Item>
    </Form>
  );
}

export default Form.create({ name: "normal_login" })(LoginFrom);
