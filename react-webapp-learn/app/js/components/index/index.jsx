import React, { Component } from "react";

import Carousel from "../carousel/Carousel"
import Category from "../category/Category";
import BlogItem from "../blog/BlogItem";
import Advert from "../advert/Advert";

import api from "service/api";

import { set, get } from "utils/StorageUtil";

class IndexPage extends Component {
	
	constructor(params){
		super(params);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		const value = get("recently", 60 * 1000 * 2);
		if (value === -1) {
			api.selectRecentlyArticle((results) => {
				this.setState({
					data: results.data
				});
				set("recently", JSON.stringify(results.data));
			})
		} else {
			this.setState({
				data: value
			});
		}
	}

	render() {
		let blogs = [];
		this.state.data.map((item, _)=>{
			blogs.push(<BlogItem key={item.id} data={item}/>)
		})	

		return (
			<div>
				<Carousel/>
				<Category/>
				<div className="fh5co-narrow-content">
					<h2 className="fh5co-heading">最近博客</h2>
					<div className="row row-bottom-padded-md">
						{ blogs }
					</div>
				</div>
				<Advert/>
			</div>
		);
	}
}

export default IndexPage;