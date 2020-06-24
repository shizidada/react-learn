import React, { Component } from "react";
import { Form, Icon, Input, Button, notification } from "antd";

import SmartCaptchaView from "../../../components/SmartCaptchaView";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSmartCaptcha: false,
      loginBtnDisabled: true,
    };
  }

  componentDidMount() {
    // console.log("LoginForm componentDidMount :: ", this.props);
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(err, values);
        this.props.login({
          principal: values.username,
          password: values.password,
        });
      }
    });
  };

  handleSmartCaptchaSuccessCallback = (data) => {
    if (typeof window !== "undefined") {
      console.log(NVC_Opt);
      console.log(data);
      this.setState({
        showSmartCaptcha: false,
        loginBtnDisabled: false,
      });
    }
  };

  handleSmartCaptchaFailCallback = () => {
    this.setState({ showSmartCaptcha: true, loginBtnDisabled: true });
  };

  handleOperationSmartCaptcha = (type) => {
    if (type === "init") {
      this.setState({ showSmartCaptcha: true, loginBtnDisabled: true }, () => {
        // this.props.form.resetFields();
        this.smartCaptchaNode.handleSmartCaptchaInit();
        this.smartCaptchaNode.handleSmartCaptchaReset();
      });
    } else if (type === "success") {
      this.smartCaptchaNode.handleSmartCaptchaSucceed();
    } else if (type === "reset") {
      this.setState({ showSmartCaptcha: true, loginBtnDisabled: true }, () => {
        this.props.form.resetFields();
        this.smartCaptchaNode.handleSmartCaptchaReset();
      });
    } else {
      this.smartCaptchaNode.handleSetSmartCaptchaFail();
    }
  };

  render() {
    const { showSmartCaptcha, loginBtnDisabled } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>

        <Form.Item style={{ display: showSmartCaptcha ? "block" : "none" }}>
          {typeof window !== "undefined" && (
            <SmartCaptchaView
              smartCaptchaSuccessCallback={
                this.handleSmartCaptchaSuccessCallback
              }
              smartCaptchaFailCallback={this.handleSmartCaptchaFailCallback}
              ref={(node) => (this.smartCaptchaNode = node)}
            />
          )}
        </Form.Item>

        <Form.Item className="smart-captcha-operation-item">
          <Button onClick={() => this.handleOperationSmartCaptcha("init")}>
            初始化
          </Button>
          <Button onClick={() => this.handleOperationSmartCaptcha("success")}>
            成功
          </Button>
          <Button onClick={() => this.handleOperationSmartCaptcha("reset")}>
            重置
          </Button>
          <Button onClick={() => this.handleOperationSmartCaptcha("fail")}>
            失败
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loginBtnDisabled}>
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "LoginForm" })(LoginForm);
