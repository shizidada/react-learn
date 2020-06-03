import React, { FunctionComponent } from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import GoodListView from './GoodListView';

interface GoodFormProps extends FormComponentProps {}

const GoodForm: FunctionComponent<GoodFormProps> = ({ form }) => {
  return <GoodListView form={form}/>;
};

export default Form.create({ name: 'GoodForm' })(GoodForm);
