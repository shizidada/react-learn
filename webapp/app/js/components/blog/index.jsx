import React from 'react';
import { Card, Select, Row, Col } from 'antd';
const Option = Select.Option;

export default class BlogPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	render() {
	    return (
			<div>
				<Card>
					<Row>
						<Col span={12}>测试 测试 测试测试 测试 测试测试 测试 测试测试 测试 测试测试 测试 测试测试 测试 测试测试</Col>
				    </Row>
				</Card>
			</div>
	    );
	}
}
