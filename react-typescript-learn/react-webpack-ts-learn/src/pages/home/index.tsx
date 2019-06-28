import * as React from "react";

import Counter from "../../containers/Counter";

export default class HomePage extends React.Component {
  public componentDidMount() {
    console.log("home page props : ", this.props);
  }

  public render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Counter />
      </div>
    );
  }
}
