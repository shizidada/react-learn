import * as React from "react";

import "./index.scss";

export interface Props {
  name: string;
  count?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Counter extends React.Component<Props> {

  private getCounterMarks = (count: number) => {
    return Array(count + 1).join("!");
  }

  public render() {
    const { name, count = 1, onIncrement, onDecrement } = this.props;
    return (
      <>
        <img src={require("./pic.png")} width="120px" height="120px" />
        <div className="greeting">Hello {name + this.getCounterMarks(count)}</div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </>
    );
  }
}

// const Test: React.FC = () => {
//   return <></>;
// };

// export default function Counter({ name, count = 1, onIncrement, onDecrement }: Props) {
//   if (count <= 0) {
//     throw new Error("You could be a little more enthusiastic. :D");
//   }

//   return (
//     <>
//       <img src={require("./pic.png")} width="120px" height="120px" />
//       <div className="greeting">Hello {name + getCounterMarks(count)}</div>
//       <div>
//         <button onClick={onDecrement}>-</button>
//         <button onClick={onIncrement}>+</button>
//       </div>
//     </>
//   );
// }
