import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { Button, Upload, Form, Icon, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { RcFile } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { connect } from 'dva';
import axios from 'axios';
import { ConnectState } from '../../../../../typings';

const { Option } = Select;

interface ImportFormProps {
  form: WrappedFormUtils;
}

interface ImportFormState {
  fileList: any[];
}

class ImportForm extends Component<ImportFormProps, ImportFormState> {
  constructor(props: ImportFormProps) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        values.file.forEach((file: UploadFile) => {
          formData.append('file', file.originFileObj as File);
        });
        formData.append('type', values.type);
        console.log('formData :: ', formData);
        axios({
          method: 'POST',
          withCredentials: true,
          url: 'http://localhost:7000/api/v1/excel/import',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  onRemove = (file: UploadFile) => {
    this.setState(state => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList,
      };
    });
  };

  beforeUpload = (file: RcFile, fileList: RcFile[]) => {
    return false;
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };

    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        {/* <Form.Item label="选择类型" {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item> */}
        <Form.Item label="选择类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '请选择类型！' }],
          })(
            <Select placeholder="请选择类型！">
              <Option value="tianpeng">天蓬</Option>
              <Option value="xiaoming">小茗</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="上传文件" {...formItemLayout}>
          {getFieldDecorator('file', {
            rules: [{ required: true, message: '请选择上传文件！' }],
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger
              accept=".xlsx"
              name="file"
              onRemove={this.onRemove}
              beforeUpload={this.beforeUpload}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击或拖拽上传文件</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default connect(
  (state: ConnectState) => {
    return {
      ...state.file,
    };
  },
  (dispatch: Dispatch) => ({}),
)(Form.create({ name: 'ImportForm' })(ImportForm));
