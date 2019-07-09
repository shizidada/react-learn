import * as React from "react";

interface IProps {}

interface IState {
  value: string;
  list: Array<any>;
}

export default class TodoItem extends React.Component<IProps, IState> {
  readonly state: Readonly<IState> = {
    value: "",
    list: [],
  };

  addTodoHandle = (val: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log("object", this.state)
    const { value, list } = this.state;
    const lists = list.concat();
    lists.push(value);
    this.setState({ list: lists });
  };

  inputChange = (val: React.ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    this.setState({ value });
  };

  render() {
    const { list } = this.state;
    return (
      <div className="todo-container">
        <input type="text" onChange={val => this.inputChange(val)} />
        <button onClick={val => this.addTodoHandle(val)}>添加</button>
        <ul>
          {list.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
