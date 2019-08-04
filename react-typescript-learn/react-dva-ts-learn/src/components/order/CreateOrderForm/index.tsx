import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';


export default class CreateOrderForm extends Component {
  private handleFormLayoutChange = () => {

  }

  public render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }

    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    }
    return (
      <div>
        <Form layout="horizontal">
          <Form.Item label="Field A" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
