import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Input, Button, message } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

// eslint-disable-next-line import/extensions
import { ConnectState } from '../../../typings';

import './index.less';
import Markedown from '../Markedown';

message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});

interface ArticleFormProps {
  form: WrappedFormUtils;
}

interface ArticleFormState {
  articleContent: string;
}

function hasErrors(fieldsError: Record<string, string[] | undefined>) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ArticleForm extends Component<ArticleFormProps, ArticleFormState> {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.articleContent === '') {
      message.warning("The Markedown content can't be null. ");
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          articleContent: this.state.articleContent,
        };
        console.log('Received values of form: ', values);
      }
    });
  };

  handleMarkedownInputChange = (value: string) => {
    this.setState({
      articleContent: value,
    });
  };

  handleToggleFullScreen = (isFullScreen: boolean) => {
    console.log('isFullScreen :: ', isFullScreen);
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const articleTitleError = isFieldTouched('articleTitle') && getFieldError('articleTitle');
    return (
      <div className="article-form-container">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item
            label="Article Title"
            validateStatus={articleTitleError ? 'error' : ''}
            help={articleTitleError || ''}
          >
            {getFieldDecorator('articleTitle', {
              rules: [{ required: true, message: 'Please Article Title!' }],
            })(
              <Input
                // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Please Article Title ."
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              POST
            </Button>
          </Form.Item>
          {/* Markedown  */}
          <Markedown
            onMarkedownInputChange={this.handleMarkedownInputChange}
            onToggleFullScreenChange={this.handleToggleFullScreen}
          />
        </Form>
      </div>
    );
  }
}
export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({}),
)(Form.create({ name: 'ArticleForm' })(ArticleForm));
