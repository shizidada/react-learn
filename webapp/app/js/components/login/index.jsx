
import React, { Component } from 'react';
import { Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert, message } from 'antd';
const FormItem = Form.Item;
const { TabPane } = Tabs;

import styles from './style.less';

import api from "service/api";
import { get, set } from "utils/StorageUtil"

class Login extends Component {

  	constructor(props) {
    	super(props);
    	// console.log(props)
    	this.state = {
	      	isError: false,
	      	type: 'account',
    	}
  	}

	componentWillMount() {
		const account = get("account");
		// 已登录
		if (account === 1) {
			this.props.history.push("/admin");
		}
	}

	onSwitch = (type) => {
		this.setState({ type });
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields({ force: true },(err, values) => {
	        if(!err) {
	        	api.login(values, (results) => {
	        			if (results.code === 1) {
	        				set("account",results.code);
					    	this.setState({
						      	isError: false
					    	});
	        				this.props.history.push("/admin");
	        			} else {
					    	this.setState({
						      	isError: true
					    	});
	        			}
	        		})
	        	}
	      	}
	    );
	}

	renderMessage = (message) => {
    	return (
      		<Alert style={{ marginBottom: 24 }} message={message} type="error" showIcon />
    	);
  	}

  	render() {
	    const { getFieldDecorator } = this.props.form;
	    const { count, type } = this.state;
    	return (
      		<div className={styles.main}>
		        <Form onSubmit={this.handleSubmit}>
		        	<Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
			            <TabPane tab="账户密码登录" key="account">
			              {
			                this.state.isError && this.renderMessage('账户或密码错误')
			              }
			              	<FormItem>
				                {getFieldDecorator('account', {
				                  rules: [{
				                    required: type === 'account', message: '请输入账户名！',
				                  }],
				                })(
				                  <Input size="large"
				                    prefix={<Icon type="user" className={styles.prefixIcon} />}
				                    placeholder="请输入账户名！"
				                  />
				                )}
			              	</FormItem>
			              	<FormItem>
				                { getFieldDecorator('password', {
				                  rules: [{
				                    required: type === 'account', message: '请输入密码！',
				                  }],
				                })(
				                  <Input size="large"
				                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
				                    type="password" placeholder="请输入密码！"
				                  />
				                )}
			              	</FormItem>
			            </TabPane>
		          	</Tabs>
		          	<FormItem className={styles.additional}>
			            <Button size="large" className={styles.submit} type="primary" htmlType="submit">
			              登录
			            </Button>
		        	</FormItem>
		        </Form>
		        <div className={styles.other}>
		          其他登录方式
		          {/* 需要加到 Icon 中 */}
		          <span className={styles.iconAlipay} />
		          <span className={styles.iconTaobao} />
		          <span className={styles.iconWeibo} />
		        </div>
     		</div>
    	);
  	}
}

export default Form.create()(Login)
