import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./index.less";

const { ipcRenderer } = window.require("electron");
const Store = window.require("electron-store");
const loginStore = new Store({ configName: "Login" });

function LoginFrom(props) {
  const { history } = props;
  const [isLoginFail, setLoginFail] = useState(false);
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        if (username !== "admin" || password !== "admin") {
          setLoginFail(true);
          return;
        }
        ipcRenderer.send("moose-login-success");
        loginStore.set("isLogin", true);
        history.push("/");
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      {isLoginFail && <Form.Item className="login-fail">用户名或密码错误！</Form.Item>}
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

export default withRouter(Form.create({ name: "normal_login" })(LoginFrom));
