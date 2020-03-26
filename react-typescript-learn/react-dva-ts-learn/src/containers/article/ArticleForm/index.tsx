import React, { FunctionComponent, useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Form, Input, Button, message, Card } from 'antd';
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

const ArticleForm: FunctionComponent<ArticleFormProps> = ({ form }) => {
  const [articleContent, setArticleContent] = useState('');
  useEffect(() => {
    form.validateFields();
    return () => {};
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (articleContent === '') {
      message.warning("The Markedown content can't be null. ");
      return;
    }
    form.validateFields((err, values) => {
      if (!err) {
        values = { ...values, articleContent };
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleMarkedownInputChange = (value: string) => {
    setArticleContent(value);
  };

  const handleToggleFullScreen = (isFullScreen: boolean) => {
    console.log('isFullScreen :: ', isFullScreen);
  };

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
  const articleTitleError = isFieldTouched('articleTitle') && getFieldError('articleTitle');
  return (
    <Card className="article-form-container">
      <Form layout="inline" onSubmit={handleSubmit}>
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
          onMarkedownInputChange={handleMarkedownInputChange}
          onToggleFullScreenChange={handleToggleFullScreen}
        />
      </Form>
    </Card>
  );
};
export default connect(
  (state: ConnectState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({}),
)(Form.create({ name: 'ArticleForm' })(ArticleForm));
