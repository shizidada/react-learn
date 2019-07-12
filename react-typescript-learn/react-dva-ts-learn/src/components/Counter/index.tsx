import * as React from "react";

import "./index.scss";

export interface Props {
  name: string;
  count?: number;
  add?: () => void;
  minus?: () => void;
}

export default class Counter extends React.Component<Props> {

  public componentDidMount() {
    console.log("Counter :: ", this.props);
  }

  public render() {
    const { name, count = 1, add, minus } = this.props;
    return (
      <>
        {/* <img src={require("./pic.png")} width="120px" height="120px" /> */}
        <div className="greeting">
          <span>Hello {name} {count}</span>
        </div>
        <div className="greeting">
          <button onClick={minus}>-</button>
          <button onClick={add}>+</button>
        </div>
      </>
    );
  }
}
