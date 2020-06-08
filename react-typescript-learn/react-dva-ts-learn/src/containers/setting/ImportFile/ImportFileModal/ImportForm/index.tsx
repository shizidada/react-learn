import React, { FunctionComponent, useState } from 'react';
import { Dispatch } from 'redux';
import { Button, Upload, Form, Icon, Select } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { RcFile } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { connect } from 'dva';
import axios from 'axios';
import { AppState } from '../../../../../typings';

const { Option } = Select;

interface ImportFormProps {
  form: WrappedFormUtils;
}

const ImportForm: FunctionComponent<ImportFormProps> = ({ form }) => {
  const files: UploadFile[] = [];
  const [fileList, setFileList] = useState(files);

  const uploadFile = (e: any) => {
    console.log('uploadFile event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onRemove = (file: UploadFile) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const beforeUpload = (file: RcFile, fileLists: RcFile[]) => {
    console.log('beforeUpload event:', file, fileLists);
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const formData = new FormData();
        values.file.forEach((file: UploadFile) => {
          formData.append('file', file.originFileObj as File);
        });
        formData.append('platform', values.platform);
        console.log('formData :: ', formData);
        axios({
          method: 'POST',
          withCredentials: true,
          url: '/api/v1/excel/import',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          data: formData
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

  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 18 } };
  const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 } };
  const { getFieldDecorator } = form;
  return (
    <Form layout="horizontal" onSubmit={handleSubmit}>
      <Form.Item label="选择类型" hasFeedback {...formItemLayout}>
        {getFieldDecorator('platform', {
          rules: [{ required: true, message: '请选择类型！' }]
        })(
          <Select placeholder="请选择类型！">
            <Option value="tianpeng">天蓬</Option>
            <Option value="xiaoming">小茗</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item label="上传文件" {...formItemLayout}>
        {getFieldDecorator('file', {
          rules: [{ required: true, message: '请选择上传文件！' }],
          valuePropName: 'fileList',
          getValueFromEvent: uploadFile
        })(
          <Upload.Dragger accept=".xlsx" name="file" onRemove={onRemove} beforeUpload={beforeUpload}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">点击或拖拽上传文件</p>
          </Upload.Dragger>
        )}
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default connect(
  (state: AppState) => {
    return {
      ...state.file
    };
  },
  (dispatch: Dispatch) => ({})
)(Form.create({ name: 'ImportForm' })(ImportForm));
