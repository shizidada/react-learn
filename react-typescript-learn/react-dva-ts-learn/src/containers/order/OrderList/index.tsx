import React, { FunctionComponent } from 'react'

import { Table, Divider, Tag } from 'antd';

const OrderList: FunctionComponent = () => {
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'orderName',
      key: 'orderName',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '数量',
      dataIndex: 'orderNum',
      key: 'orderNum',
    },
    {
      title: '收货地址',
      dataIndex: 'orderAddress',
      key: 'orderAddress',
    },
    {
      title: '状态',
      key: 'orderStatus',
      dataIndex: 'orderStatus',
      render: (tags: string[]) => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: any) => (
        <span>
          <a>修改</a>
          <Divider type="vertical" />
          <a>查看</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      orderName: '2029 New HUAWEI mate pro 129',
      orderNum: 12,
      orderAddress: 'ShenZhen',
      orderStatus: ['nice', 'developer'],
    },
    {
      key: '2',
      orderName: '2039 New Apple iPhone 20 pro',
      orderNum: 9,
      orderAddress: 'New York',
      orderStatus: ['just so so'],
    },
  ];
  return <Table columns={columns} dataSource={data} />
}

export default OrderList
