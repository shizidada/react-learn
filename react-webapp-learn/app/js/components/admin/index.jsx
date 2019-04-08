import React, { Component } from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import { Form, Input, Select, Button, Breadcrumb, Alert, DatePicker, message } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

import data from "./data";
import style from "./style";
import api from "service/api";
import { get } from "utils/StorageUtil"

class AdminEditor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			createTime: null
		}
		// console.log("AdminEditor " , props)
	}

	componentWillMount(){
		const { history } = this.props;
		const account = get("account");
		// 未登录
		if (account === -1) {
			history.push("/login");
			return;
		}
	}

	componentDidMount() {
		this.setState({
			data
		})
		this.editor = new Simditor({
			textarea: $('#editor'),
		        toolbar: [ 'title','bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr', '|', 'html'],
		        tabIndent: true,
		        toolbarFloat: false,
		        pasteImage: true,
		         upload: true,
		});
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    const content = this.editor.getValue();
	    this.props.form.validateFieldsAndScroll((err, values) => {
	      	if (!err) {
	        	const params = {...values, createTime: new Date(this.state.createTime), content:content}
	    		console.log(params)
	      		api.addArticle(params,(results) =>{
	      			if (results.data === 1) {
	      				message.success("添加成功!")
	      			} else if (results.data === 0) {
	      				message.success("添加失败!")
	      			} else if (results.data === -1) {
	      				message.success("发生错误!")
	      			}
	      		})
	      	}
	    });
	}

	handleDataChange = (_, value) => {
		this.setState({
			createTime: value
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      			labelCol: { xs: { span: 8,  pull: 6 }, sm: { span: 8, pull: 6 }},
      			wrapperCol: { xs: { span: 8, pull: 6 }, sm: { span: 8, pull: 6 }},
    		};

		const contentLayout = { wrapperCol: { xs: { span: 24}, sm: { span: 24 }}, };

		const tailFormItemLayout = { wrapperCol: { xs: { span: 24, push: 20 }, sm: { span: 24, push: 20 }} };

		return (
			<Form onSubmit={this.handleSubmit}>
				<div className={style.header}>
					<Breadcrumb>
						<Breadcrumb.Item><span>Please Editor...</span></Breadcrumb.Item>
						<Breadcrumb.Item><span><Link to="/manager">管理</Link></span></Breadcrumb.Item>
					</Breadcrumb>
				</div>
	        		<FormItem {...formItemLayout } label="请输入标题:">
			        	{ getFieldDecorator('title', {
			        		rules: [{
				            	required: true, message: 'please input title!',
				            }]
			        	})(
			        		<Input />)
			        	}
			        </FormItem>

	        		<FormItem {...formItemLayout } label="请选择时间:">
			        	{ getFieldDecorator('createTime', {
			        		rules: [{
				            	required: true, message: 'please choose time!',
				            }]
			        	})(
			        		<DatePicker onChange={ this.handleDataChange }/>)
			        	}
			        </FormItem>

	        		<FormItem {...formItemLayout } label="请输入昵称:">
			        	{ getFieldDecorator('author', {
			        		rules: [{
				            	required: true, message: 'please input nickname!',
				            }]
			        	})(
			        		<Input />)
			        	}
			        </FormItem>

	        		<FormItem {...formItemLayout } label="请选择类型:">
			        	{ getFieldDecorator('category', { initialValue: "Java" })
			        		(
						    	<Select>
						    		{
						    			this.state.data && this.state.data.map((item,index)=>{
						    				return <Option key={index} value={item.desc}>{item.desc}</Option>
						    			})
						    		}
						      	</Select>
	      					)
			        	}
			        </FormItem>

				<div className={style.inputTextArea}>
					<textarea id="editor" placeholder="开始编辑..." autoFocus></textarea>
				</div>

		        <FormItem {...tailFormItemLayout}>
		        	<Button style={{marginRight: 8}}>保存</Button>
		         	<Button type="primary" htmlType="submit">提交</Button>
		        </FormItem>
			</Form>
		)
	}
}

export default Form.create()(AdminEditor);
