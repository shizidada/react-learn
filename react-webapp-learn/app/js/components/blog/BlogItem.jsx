import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card } from "antd";

import dateUtil from "utils/DateUtil"


class BlogItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const props = this.props;
		const path  = `/blog_detail/${props.data.id}`;

		return (
			<div className="col-md-3 col-sm-6 col-padding">
				<Link to={path}>
					<Card>
						<div className="blog-entry">
							<div className="blog-img">
								<img src="http://localhost:9090/assets/images/img.jpg" className="img-responsive" alt="image"/>
							</div>
							<div className="desc">
								<h3>
									{ props.data.title.length > 9 ? props.data.title.slice(0,8)+"..." : props.data.title }
								</h3>
								<span><small>{props.data.author}</small>-<small>{props.data.category}</small></span>
								<p>{dateUtil.format(new Date(props.data.createTime),"yyyy-MM-dd")}</p>
								<br/>
								<span className="lead">Read More <i className="icon-arrow-right3"></i></span>
							</div>
						</div>
					</Card>
				</Link>
			</div>
		)
	}
}

export default BlogItem;