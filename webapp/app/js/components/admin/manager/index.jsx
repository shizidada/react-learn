import moment from "moment";
import React, { Component } from "react";
import { Table, Icon, Popconfirm, message } from 'antd';

import dateUtil from "utils/DateUtil"
import api from "service/api";

class Manager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.queryAllArticle();
	}

	queryAllArticle() {
		api.queryAllArticle((results,err) => {
			this.setState({
				data: results.data
			})
		})
	}

	//去掉所有的html标记
	delHtmlTag(msg) {
        var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
        msg = msg.replace(/[|]*\n/, '') //去除行尾空格
        msg = msg.replace(/&nbsp;/ig, ''); //去掉nbsp
        return msg;
	}

	handleDelete = (key) => {
		api.updateArticleByStatus(key,(results) =>{
			console.log(results)
			if (results.data === 1) {
				this.queryAllArticle();
				message.info("删除成功!")
			} else {
				message.info("删除失败!")
			}
		})
	}

	handleModified = (key) => {
		console.log("handleModified" + key)
	}

	render() {
		let dataSource = []
		this.state.data.map((item, index)=>{
			let content = this.delHtmlTag(item.content);
			content = content.length > 20 ? content.slice(0,20)+"..." : content;
			dataSource.push({
				key: item.id,
				title: item.title,
				category: item.category,
				createTime: dateUtil.format(new Date(item.createTime),"yyyy-MM-dd"),
				content: content
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
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
			}, {
				title: '操作',
				key: 'operation',
				render:  (text, record) => {
					return (
						dataSource.length > 0 ? 
						(
							<span>
								<Popconfirm title="Sure to delete?" onConfirm={() => this.handleModified(record.key)}>
									<a href="#">修改</a>&nbsp;|&nbsp;
					            </Popconfirm>
								<Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
									<a href="#">删除</a>
					            </Popconfirm>
							</span>
						) : null
					)
				}
			}
		];

		return (
			<div><Table dataSource={dataSource} columns={columns} /></div>
		)
	}
}

export default Manager;