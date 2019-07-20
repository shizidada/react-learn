import * as React from "react";

import Counter from "../../containers/Counter";
import HookItem from "../../components/HookItem";
import HOC from "../../components/HOC";
import ColorPicker from "../../components/ColorPicker";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <HookItem />
        <HOC name="HOC NAME" loading={false}/>
        <ColorPicker/>
      </div>
    );
  }
}
