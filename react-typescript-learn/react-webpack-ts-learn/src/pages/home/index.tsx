import * as React from "react";
// import ReactLoading from "react-loading";

import Counter from "../../containers/Counter";

export default class HomePage extends React.Component {
  public componentDidMount() {
    console.log("home page props : ", this.props);
    // console.log(this.props);
  }

  public render() {
    // balls | bars | bubbles | cubes | cylon |
    // spin | spinningBubbles | spokes",
    return (
      <div>
        <h1>HomePage</h1>
        {/* <ReactLoading type="spinningBubbles" color="green" /> */}
        <Counter />
      </div>
    );
  }
}
