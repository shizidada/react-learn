import React, { Component } from 'react';
import { Link } from 'dva/router';

import { Button } from 'antd';

export default class OrderPage extends Component {
  public render() {
    return (
      <div>
        <Button>
          <Link to="order/create">创建</Link>
        </Button>
      </div>
    );
  }
}
