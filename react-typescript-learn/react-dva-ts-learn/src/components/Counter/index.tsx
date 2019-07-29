import * as React from 'react';
import { Button } from 'antd';

import './index.less';

export interface CounterProps {
  name: string;
  count?: number;
  add: () => void;
  minus: () => void;
}

export default class Counter extends React.Component<CounterProps, {}> {
  public componentDidMount() {
    console.log('Counter :: ', this.props);
  }

  public render() {
    const { name, count = 1, add, minus } = this.props;
    return (
      <>
        <div className="greeting">
          Hello {name} {count}
        </div>
        <div className="greeting">
          <Button onClick={() => minus()}>-</Button>
          <Button onClick={() => add()}>+</Button>
        </div>
      </>
    );
  }
}
