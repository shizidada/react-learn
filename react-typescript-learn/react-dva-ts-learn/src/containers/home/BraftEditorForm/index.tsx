import * as React from 'react';

import { Card, Form, Button } from 'antd';
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

interface BraftEditorFormState {
  isEditor: boolean;
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
      isEditor: false,
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
    const { isEditor } = this.state;
    this.setState({ isEditor: !isEditor });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isEditor } = this.state;
    console.log('HomePage :: ', this.props, this.state);
    return (
      <Card>
        <Form className="home-form-container" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType={isEditor ? 'button' : 'submit'}
              onClick={this.changeBraftEditorStatusHandle}
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
                placeholder={isEditor ? '请输入正文内容' : ''}
                controls={isEditor ? defaultControls : []}
              />,
            )}
          </Form.Item>
          {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div> */}
        </Form>
      </Card>
    );
  }
}

export default Form.create({ name: 'home_form' })(BraftEditorForm);
