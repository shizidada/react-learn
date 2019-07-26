import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { WrappedFormUtils } from "antd/lib/form/Form";

import { NAMESPACE } from "../../models/login/constants";
import { getLoginState } from "../../models/login";
import { GlobalState } from "../../models/global";

const mapStateToProps = (state: GlobalState) => getLoginState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLoginType(record: object) {
    dispatch({ type: `${NAMESPACE}/changeLoginType`, payload: record });
  },
});

import "./index.less";

interface LoginFormProps {
  form?: WrappedFormUtils;
  isLoginType: boolean;
  changeLoginType: (type: object) => void;
}
interface LoginFormState {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  private changeType = () => {
    let type = this.props.isLoginType;
    this.props.changeLoginType({ isLoginType: !type });
    this.props.form.resetFields();
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoginType } = this.props;

    console.log("LoginPage :: ", this.props);
    return (
      <div className="login-form-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("repassword", {
              rules: [{ required: true, message: "请输入密码!" }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="请输入密码"
              />
            )}
          </Form.Item>

          {!isLoginType && (
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请再次输入密码!" }],
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="请再次输入密码"
                />
              )}
            </Form.Item>
          )}

          {isLoginType && (
            <Form.Item className="login-form-register">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              {isLoginType ? "登录" : "注册"}
            </Button>
            <a href="javascript:void(0)" onClick={() => this.changeType()}>
              {isLoginType ? "注册" : "登录"}
            </a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "login_form" })(LoginForm));
