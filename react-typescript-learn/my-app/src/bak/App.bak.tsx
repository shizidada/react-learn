import React from "react";

import TodoItem from "../components/TodoItem";

interface IProps {
  name?: string;
  age?: number;
  address?: any;
  monery?: string;
}

interface IState {
  readonly list: Array<any>;
  readonly name: string;
  readonly count: number;
}

class App extends React.Component<IProps, IState> {
  public monery: string = "";

  // public readonly state: Readonly<IState> = {
  //   name: "",
  //   list: [],
  //   count: 1,
  // }

  constructor(props: IProps) {
    super(props);
    this.monery = props.monery || "this monery";
  }

  componentDidMount() {
    this.setState(
      {
        list: [1, 2, 32, 3, 4],
        count: 123,
        name: "江景",
      },
      () => {
        console.log(this.state);
      }
    );
    // this.state.count = 33;
  }

  render() {
    return (
      <div>
        <header>
          <TodoItem></TodoItem>
        </header>
      </div>
    );
  }
}

export default App;
