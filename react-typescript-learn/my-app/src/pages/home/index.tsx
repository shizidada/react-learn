import * as React from "react";

import Counter from "../../containers/Counter";
import HookItem from "../../components/HookItem";
import HOC from "../../components/HOC";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <HookItem />
        <HOC name="HOC NAME" loading={true}/>
      </div>
    );
  }
}
