import * as React from "react";
import Counter from "../../containers/Counter";

export default class HomePage extends React.Component {
  public render() {
    return (
      <div>
        HomePage
        <Counter />
      </div>
    );
  }
}
