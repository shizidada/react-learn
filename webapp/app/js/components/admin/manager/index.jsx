import React, { Component } from "react";
import { Table, Icon, Divider } from 'antd';

import api from "./api";

class Manager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		console.log("componentDidMount")
		api.queryAllArticle((results,err) => {
			this.setState({
				data: results.data
			})
		})

	}

	//去掉所有的html标记
	 delHtmlTag(str) {
		return str.replace(/<[^>]+>/g,"").replace("&nbsp","");
	}

	render() {

		let dataSource = []
		this.state.data.map((item, index)=>{
			dataSource.push({
				key: index,
				title: item.title,
				category: item.category,
				content:  this.delHtmlTag(item.content),
			})
		})

		const columns = [{
				title: '标题',
				dataIndex: 'title',
				key: 'title',
			}, {
				title: '分类',
				dataIndex: 'category',
				key: 'category',
			}, {
				title: '内容',
				dataIndex: 'content',
				key: 'content',
			}, {
				title: '操作',
				key: 'operation',
				render:  (text, record) => (
					<span>
						<a href="#">修改 </a>
						<a href="#">删除 </a>
					</span>
				)
			}
		];

		return (
			<div><Table dataSource={dataSource} columns={columns} /></div>
		)
	}
}

export default Manager;