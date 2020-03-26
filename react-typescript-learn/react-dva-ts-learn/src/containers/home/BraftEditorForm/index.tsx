import React, { FunctionComponent, useState } from 'react';

import { Form, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// 引入编辑器样式
import 'braft-editor/dist/index.css';

// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';

import './index.less';

const defaultControls: ControlType[] = [
  'undo',
  'redo',
  'separator',
  'font-size',
  'line-height',
  'letter-spacing',
  'separator',
  'text-color',
  'bold',
  'italic',
  'underline',
  'strike-through',
  'separator',
  'superscript',
  'subscript',
  'remove-styles',
  'emoji',
  'separator',
  'text-indent',
  'text-align',
  'separator',
  'headings',
  'list-ul',
  'list-ol',
  'blockquote',
  'code',
  'separator',
  'link',
  'separator',
  'hr',
  'separator',
  'media',
  'separator',
  'clear',
];

interface BraftEditorFormProps {
  form: WrappedFormUtils;
}

const BraftEditorForm: FunctionComponent<BraftEditorFormProps> = ({ form }) => {
  const [isEditor, changeEditorStatus] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          content: values.content.toHTML(), // or values.content.toHTML()
        };
        console.log(submitData);
      }
    });
  };

  const changeBraftEditorStatusHandle = () => {
    changeEditorStatus(!isEditor);
  };

  const { getFieldDecorator } = form;
  return (
    <Form className="home-form-container" onSubmit={handleSubmit}>
      <Form.Item>
        <Button
          size="large"
          type="primary"
          htmlType={isEditor ? 'button' : 'submit'}
          onClick={() => changeBraftEditorStatusHandle()}
        >
          {isEditor ? '保存' : '编辑'}
        </Button>
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('content', {
          validateTrigger: 'onBlur',
          rules: [
            {
              required: false,
              // validator: (_, value, callback) => {
              //   if (value.isEmpty()) {
              //     callback('请输入正文内容');
              //   } else {
              //     callback();
              //   }
              // },
            },
          ],
        })(
          <BraftEditor
            className="home-form-editor"
            readOnly={!isEditor}
            placeholder={isEditor ? '请输入正文内容...' : ''}
            controls={isEditor ? defaultControls : []}
          />,
        )}
      </Form.Item>
      {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div> */}
    </Form>
  );
};

export default Form.create({ name: 'BraftEditorForm' })(BraftEditorForm);
