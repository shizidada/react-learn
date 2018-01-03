import React, { Component } from "react";

import Carousel from "../carousel/Carousel"
import Category from "../category/Category";
import BlogItem from "../blog/BlogItem";
import Advert from "../advert/Advert";

class IndexPage extends Component {
	
	constructor(params){
		super(params);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		let data = [];
		for(var i = 0; i < 6; i++){
			data.push(<BlogItem key={i} data={i}/>);
		}
		this.setState({
			data
		})
	}

	render() {
		return (
			<div>
				<Carousel/>
				<Category/>
				<div className="fh5co-narrow-content">
					<h2 className="fh5co-heading">最近博客</h2>
					<div className="row row-bottom-padded-md">
						{this.state.data}
					</div>
				</div>
				<Advert/>
			</div>
		);
	}
}

export default IndexPage;