import React from 'react';

class Carousel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{height: 256}}>
				<img style={{height: 256,width: 3100}} src="/assets/images/carousel.jpg"/>
		  	</div>
		);
	}
}
export default Carousel