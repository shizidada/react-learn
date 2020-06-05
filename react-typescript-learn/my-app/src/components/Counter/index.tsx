import React, { FunctionComponent, Fragment } from "react";
// import ReactPlaceholder from "react-placeholder";
// import "react-placeholder/lib/reactPlaceholder.css";

import { Badge, Button } from "antd";

interface CounterProps {
  count: number;
  name: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface CounterState {
  ready: boolean;
}

const Counter: FunctionComponent<CounterProps> = ({ count, name, onDecrement, onIncrement }) => {
  return (
    <Fragment>
      <p>{name}</p>
      <Button onClick={() => onDecrement()}>-</Button>
      <Badge count={count} />
      <Button onClick={() => onIncrement()}>+</Button>
    </Fragment>
  );
};

export default Counter;
