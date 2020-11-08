import Form, { FormComponentProps } from 'antd/lib/form';
import { debounce } from 'lodash';
import React, { Component } from 'react';
import GoodFormItem from './GoodFormItem';


const { Item } = Form;

interface GoodListViewProps extends FormComponentProps {}

interface GoodListViewState {
  goodList: any[];
  value?: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 22 }
  }
};

class GoodListView extends Component<GoodListViewProps, GoodListViewState> {
  constructor(props: GoodListViewProps) {
    super(props);
    this.state = {
      goodList: [{}, {}, {}],
      value: ''
    };
    this.onInputChange = debounce(this.onInputChange, 500);
  }

  handleChangeInput = (e: any, index: number, filedName: string) => {
    this.onInputChange(e.target.value, index, filedName);
  };

  onInputChange = (value: any, index: number, filedName: string) => {
    const { goodList } = this.state;
    const tempGoodList = goodList.concat();
    tempGoodList[index][filedName] = value;
    this.setState({ goodList: tempGoodList });
  };

  render() {
    const { goodList = [], value } = this.state;
    const { form } = this.props;
    // console.log('render goodList :: ', goodList);
    return (
      <Form {...formItemLayout}>
        {goodList.map((item, index: number) => (
          <GoodFormItem
            // key={`${index}`}
            form={form}
            goodIndex={index}
            goodInfo={item}
            onChange={(e) => this.handleChangeInput(e, index, 'userName')}
          />
        ))}
      </Form>
    );
  }
}

export default GoodListView;
