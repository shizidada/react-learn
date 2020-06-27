import { Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { FunctionComponent } from 'react';

const { Item } = Form;

interface GoodFormItemProps extends FormComponentProps {
  goodIndex?: number;
  goodInfo?: any;
  onChange?: (e: any) => void;
}

const GoodFormItem: FunctionComponent<GoodFormItemProps> = ({ form, goodIndex, goodInfo, onChange }) => {
  const { getFieldDecorator } = form;
  if (!goodInfo.userName) goodInfo.userName = '';
  return (
    <Item label="Username" extra={`Current Value : ${goodInfo.userName}`}>
      {getFieldDecorator(`username-${goodIndex}`, {
        initialValue: goodInfo.userName,
        rules: [{ required: true, message: 'Please input your username!' }]
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
          onChange={onChange}
        />
      )}
    </Item>
  );
};

export default GoodFormItem;
