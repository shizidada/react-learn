import * as React from "react";
import Counter from "../../containers/Counter";

export default class HomePage extends React.Component {
  public render() {
    console.log("HomePage :: ", this.props);
    return (
      <div>
        HomePage
        <Counter />
      </div>
    );
  }
}
