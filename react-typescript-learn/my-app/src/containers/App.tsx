import React from "react";
// import logo from "../logo.svg";
import "../App.css";

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
      },
    );
    // this.state.count = 33;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoItem></TodoItem>
        </header>
      </div>
    );
  }
}

export default App;
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </any>
//       </header>
//     </div>
//   );
// }
