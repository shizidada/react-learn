import React, { Component } from 'react';

import api from "service/api";
import style from "./style";


class BlogDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		const blogId = this.props.match.params.blogId;
		api.selectArticleById(blogId, (results) => {
			this.setState({
				data: results.data
			})
		});
	}

	render() {
		console.log(this.state.data)
	    return (
	        <div>
	        	<div className={style.title}>
	        		{this.state.data && <h1>{this.state.data.title}</h1>}
	        	</div>
	        	<div className={style.content} dangerouslySetInnerHTML={{"__html": this.state.data && this.state.data.content}}></div>
	        </div>
	    );
	}

}

export default BlogDetail;
