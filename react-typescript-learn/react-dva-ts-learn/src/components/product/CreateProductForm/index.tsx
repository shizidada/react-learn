import React, { Component } from 'react';
import { Form, Input, Button, Upload, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

interface CreateProductFormProps {
  form: WrappedFormUtils;
}

class CreateProductForm extends Component<CreateProductFormProps, {}> {
  private handleFormLayoutChange = () => {

  }

  private normFile = (event: any[]) => {
    console.log('Upload event:', event);
    // if (Array.isArray(event)) {
    //   return event;
    // }
    // return event && event.fileList;
  };


  public render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
    }

    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="horizontal">
          <Form.Item label="商品名称" {...formItemLayout}>
            <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item label="商品名称" {...formItemLayout}>
            <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item label="上传图片" extra="请上传商品图片" {...formItemLayout}>
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> 上传图片
                </Button>
              </Upload>,
            )}
          </Form.Item>
          <Form.Item label="商品图片" {...formItemLayout}>
            <span>商品图片</span>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">提交</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Form.create({ name: 'create_product_form' })(CreateProductForm);
