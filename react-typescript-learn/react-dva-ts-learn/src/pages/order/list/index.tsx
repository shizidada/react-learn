import React, { FunctionComponent } from 'react'
import { Card, Tabs } from 'antd'

import OrderList from '../../../containers/order/OrderList'

const { TabPane } = Tabs;

const OrderListPage: FunctionComponent = () => {
  return (
    <Card>
      <Tabs>
        <TabPane tab="待付款" key="1">
          <OrderList />
        </TabPane>
        <TabPane tab="待发货" key="2">
          待发货
      </TabPane>
        <TabPane tab="待收货" key="3">
          待收货
      </TabPane>
        <TabPane tab="评价" key="4">
          评价
      </TabPane>
        <TabPane tab="退货/售后" key="5">
          退货/售后
      </TabPane>
      </Tabs>
    </Card>
  )
}

export default OrderListPage
