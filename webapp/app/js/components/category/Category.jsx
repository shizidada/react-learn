import React,{ Component } from 'react';

import CategoryItem from './CategoryItem';
import api from './api';
import data from './data.json';

class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.setState({
			data
		});
	}

  	render() {
    	return (
      		<div className="fh5co-narrow-content">
				<h2 className="fh5co-heading">分类</h2>
				<div className="row row-bottom-padded-md">
				{
					this.state.data.map((item,index)=>{
						return <CategoryItem key={index} data={item}/>
					})
				}
				</div>
			</div>
    	);
  	}
}
export default Category;