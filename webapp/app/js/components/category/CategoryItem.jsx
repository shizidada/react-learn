import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "antd";

const CategoryItem = (props) => {
	const path  = `/category_detail/${props.data.id}`;
    return (
		<div className="col-md-3 col-md-6">
			<div className="fh5co-feature">
				<Link to={path}>
					<Card>
						<div className="fh5co-icon" style={{marginTop: 1,marginLeft:1}}>
							<i className={props.data.icon}></i>
						</div>
						<div className="fh5co-text">
							<h3>{props.data.desc}</h3>
							<p>{props.data.content}</p>
						</div>
					</Card>
				</Link>
			</div>
		</div>
    );
}

export default CategoryItem;