import React, { Component }from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import { Form, Input, Select, Button, Breadcrumb, Alert, DatePicker  } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

import data from "../category/data";
import style from "./style";
import api from "./api";

class AdminEditor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
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
	        	const params = {...values, content:content}
	      		api.addArticle(params,(results) =>{
	        		console.log("返回的结果" + results.data);
	      		})
	      	}
	    });
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
	        		<FormItem {...formItemLayout } label="标题:">
			        	{ getFieldDecorator('title')(<Input />)}
			        </FormItem>
	        		<FormItem {...formItemLayout } label="创建时间:">
			        	{ getFieldDecorator('createTime')(<DatePicker/>)}
			        </FormItem>
	        		<FormItem {...formItemLayout } label="你是谁！:">
			        	{ getFieldDecorator('author')(<Input />)}
			        </FormItem>
	        		<FormItem {...formItemLayout } label="类型:">
			        	{ getFieldDecorator('category', { initialValue: "Java" })
			        		(
						    	<Select>
						    		{
						    			this.state.data.map((item,index)=>{
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
