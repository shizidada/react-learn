import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';

export default class ProductListPage extends Component {
  render() {
    return (
      <div>
        <Button>
          <Link to="/product/create">添加商品</Link>
        </Button>
        ProductListPage
      </div>
    );
  }
}
