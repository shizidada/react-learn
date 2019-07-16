import * as React from "react";

import Counter from "../../containers/Counter";
import HookItem from "../../components/HookItem";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <HookItem />
      </div>
    );
  }
}
