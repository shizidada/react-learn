import React from "react";

// import { config } from "../../common/config";
import Counter from "../../containers/Counter";
import HookItem from "../../components/HookItem";
import TodoItem from "../../components/TodoItem";
// import ColorPicker from "../../components/ColorPicker";

export default class HomePage extends React.Component {
  render() {
    console.log("HomePage this.props", this.props);
    return (
      <div>
        <Counter />
        <HookItem />
        <TodoItem />
        {/* <HOC name="HOC NAME" loading={false} /> */}
      </div>
    );
  }
}
