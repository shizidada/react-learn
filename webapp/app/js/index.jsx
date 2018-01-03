import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router , Link, Route, Switch } from "react-router-dom";

import Routers from './routers';

import data from "./data.json";

class AppContainerPage extends Component {
	constructor(params){
		super(params);
		this.state = {
			items: []
		}
	}

	componentDidMount(){
		this.setState({
			items: data
		});
	}

	render() {
		return (
			<Router>
				<div id="fh5co-page">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
					<aside id="fh5co-aside" role="complementary" className="border js-fullheight">
						<h1 id="fh5co-logo">
							<a href="#">SHIZI</a>
						</h1>
						<nav id="fh5co-main-menu">
							<ul>
								{
									this.state.items.map((item,index)=>{
										return <li key={index}><Link to={item.path}>{item.name}</Link></li>
									})
								}
							</ul>
						</nav>
						<div className="fh5co-footer">
							<p>
								<small>&copy; 2017 shizidada. <br/>All Rights Reserved.</small>
							</p>
							<ul>
								<li><a href="#"><i className="icon-facebook2"></i></a></li>
								<li><a href="#"><i className="icon-twitter2"></i></a></li>
								<li><a href="#"><i className="icon-instagram"></i></a></li>
								<li><a href="#"><i className="icon-linkedin2"></i></a></li>
							</ul>
						</div>
					</aside>
					<div id="fh5co-main">
						<Routers/>
					</div>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<AppContainerPage/>,
	document.getElementById('app')
)