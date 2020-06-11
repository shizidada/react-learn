import * as React from 'react';

import './index.less';

export interface CounterProps {
  name: string;
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Counter extends React.Component<CounterProps> {
  private getCounterMarks = (count: number) => {
    console.log('object');
    return Array(count + 1).join('!');
  };

  public render() {
    const { name, count = 1, onIncrement, onDecrement } = this.props;
    return (
      <>
        <div className="greeting">Hello {name + this.getCounterMarks(count)}</div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </>
    );
  }
}
