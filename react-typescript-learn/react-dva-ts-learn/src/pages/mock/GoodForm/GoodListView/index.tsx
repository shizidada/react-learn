import Form, { FormComponentProps } from 'antd/lib/form';
import { debounce } from 'lodash';
import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
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
    sm: { span: 10 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
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
        <Item label="DebounceInput" extra={`Input Value : ${value}`}>
          <DebounceInput
            className="ant-input"
            minLength={2}
            placeholder="输入..."
            debounceTimeout={300}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
        </Item>
      </Form>
    );
  }
}

export default GoodListView;
