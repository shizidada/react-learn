import React, { Component } from 'react';
import { Form, Input, InputNumber, Button, Upload, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const { TextArea } = Input;

interface CreateProductFormProps {
  form: WrappedFormUtils;
}

class CreateProductForm extends Component<CreateProductFormProps, {}> {
  private handleFormLayoutChange = () => {};

  private uploadImageEvent = (event: any) => {
    console.log('Upload event:', event);
    if (event.file && event.file.response) {
      if (event.file.response.data) {
        const { productImage } = event.file.response.data;
        if (productImage.status) {
          console.log('上传成功 ', productImage);
          return productImage.path;
        }
        return '上传失败';
      }
      return '上传失败';
    }
    return '上传失败';
  };

  private handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  public render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
    };

    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item label="商品名称" {...formItemLayout}>
            {getFieldDecorator('productName', {
              rules: [{ required: true, message: '请输入商品名称!' }],
            })(<Input placeholder="请输入商品名称" name="productName" />)}
          </Form.Item>
          <Form.Item label="商品品牌" {...formItemLayout}>
            {getFieldDecorator('productBrand', {
              rules: [{ required: true, message: '请输入商品品牌!' }],
            })(<Input placeholder="请输入商品品牌" name="productBrand" />)}
          </Form.Item>
          <Form.Item label="商品分类" {...formItemLayout}>
            {getFieldDecorator('productCategory', {
              rules: [{ required: true, message: '请输入商品分类!' }],
            })(<Input placeholder="请输入商品分类" name="productCategory" />)}
          </Form.Item>
          <Form.Item label="商品库存" {...formItemLayout}>
            {getFieldDecorator('productStock', {
              rules: [{ required: true, message: '请输入商品库存!' }],
            })(
              <InputNumber
                placeholder="请输入商品库存"
                name="productStock"
                min={0}
                max={10000}
                step={1}
              />,
            )}
          </Form.Item>
          <Form.Item label="商品价格" {...formItemLayout}>
            {getFieldDecorator('productPrice', {
              rules: [{ required: true, message: '请输入商品价格!' }],
            })(
              <InputNumber
                placeholder="请输入商品价格"
                name="productPrice"
                min={0}
                max={10000}
                step={1}
              />,
            )}
          </Form.Item>
          <Form.Item label="商品描述" {...formItemLayout}>
            {getFieldDecorator('productDesc', {
              rules: [{ required: true, message: '请输入商品价格!' }],
            })(<TextArea placeholder="请输入商品描述" rows={4} name="productDesc" />)}
          </Form.Item>
          <Form.Item label="商品图片" {...formItemLayout}>
            {getFieldDecorator('productImage', {
              // valuePropName: 'fileList',
              rules: [{ required: true, message: '请上传商品图片!' }],
              getValueFromEvent: this.uploadImageEvent,
            })(
              <Upload action="" name="productImage" listType="picture">
                <Button>
                  <Icon type="upload" /> 上传图片
                </Button>
              </Upload>,
            )}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create({ name: 'create_product_form' })(CreateProductForm);
