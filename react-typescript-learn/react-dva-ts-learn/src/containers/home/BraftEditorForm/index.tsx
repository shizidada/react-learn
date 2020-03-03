import * as React from 'react';

import { Form, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// 引入编辑器样式
import 'braft-editor/dist/index.css';

// 引入编辑器组件
import BraftEditor, { ControlType } from 'braft-editor';

import './index.less';
import { ButtonHTMLType } from 'antd/lib/button/button';

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

interface BraftEditorFormState {
  buttonText: string;
  htmlType: ButtonHTMLType;
  controls: ControlType[];
}

class BraftEditorForm extends React.Component<BraftEditorFormProps, BraftEditorFormState> {
  // submitContent = async () => {
  //   // 在编辑器获得焦点时按下ctrl+s会执行此方法
  //   // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
  //   const htmlContent = this.state.editorState.toHTML();
  //   console.log(htmlContent);
  // };

  constructor(props: BraftEditorFormProps) {
    super(props);
    this.state = {
      buttonText: '保存',
      htmlType: 'button',
      controls: [],
    };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          content: values.content.toHTML(), // or values.content.toHTML()
        };
        console.log(submitData);
      }
    });
  };

  changeBraftEditorStatusHandle = () => {
    const { htmlType } = this.state;
    const tempType = htmlType === 'submit' ? 'button' : 'submit';
    const buttonText = htmlType === 'button' ? '编辑' : '保存';
    const controls = htmlType === 'button' ? [] : defaultControls;
    this.setState({ buttonText, controls, htmlType: tempType });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { buttonText, htmlType, controls } = this.state;
    const formItemLayout = {
      labelCol: { span: 1 },
      wrapperCol: { span: 22, offset: 1 },
    };
    console.log('HomePage :: ', this.props);
    return (
      <Form className="home-form-container" onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout}>
          <Button
            size="large"
            type="primary"
            htmlType={htmlType}
            onClick={this.changeBraftEditorStatusHandle}
          >
            {buttonText}
          </Button>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('content', {
            validateTrigger: 'onBlur',
            rules: [
              {
                required: true,
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
                    callback('请输入正文内容');
                  } else {
                    callback();
                  }
                },
              },
            ],
          })(
            <BraftEditor
              className="home-form-editor"
              controls={controls}
              readOnly
              placeholder="请输入正文内容"
            />,
          )}
        </Form.Item>
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div> */}
      </Form>
    );
  }
}

export default Form.create({ name: 'home_form' })(BraftEditorForm);
