import React from 'react';
import { Link } from "react-router-dom";

import { Card } from "antd";

const BlogItem = (props) => {
	const path  = `/blog_detail/${props.data}`;
	return (
		<div className="col-md-3 col-sm-6 col-padding">
			<Link to={path}>
				<Card>
					<div className="blog-entry">
						<div className="blog-img">
							<img src="http://localhost:9090/assets/images/img.jpg" className="img-responsive" alt="image"/>
						</div>
						<div className="desc">
							<h3>title</h3>
							<span><small>author</small>-<small>type</small></span>
							<p>bologContent</p>
							<br/>
							<span className="lead">Read More <i className="icon-arrow-right3"></i></span>
						</div>
					</div>
				</Card>
			</Link>
		</div>
	)
}

export default BlogItem;