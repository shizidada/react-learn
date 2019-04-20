import React, { Component } from "react";

const trackerIds = ["async-add", "counter-add", "counter-minus"];
const trackerClassNames = ["sync-add"];

class Tracker extends Component {
  documentDelegateHandle = event => {
    const curentId = event.target.id;
    const className = event.target.className;
    //getAttribute("class");

    // console.log("被点击的ID :: ", curentId, className);
    if (trackerIds.indexOf(curentId) > -1) {
      console.log("发送埋点数据 :: ", curentId);
    }
    if (trackerClassNames.indexOf(className) > -1) {
      console.log("发送埋点数据:: ", className);
    }
  };

  componentDidMount() {
    // console.log("Tracker props :: ", this.props);
    document.addEventListener("click", this.documentDelegateHandle);
  }

  componentWillUnmount() {
    document.removeEventListener(this.documentDelegateHandle);
  }

  render() {
    const children = this.props.children;
    const history = this.props.history;
    // console.log(this.props.history);
    return (
      <div>
        {React.Children.map(children, child => {
          // console.log(child);
          return React.cloneElement(child, {
            ...history
          });
        })}
      </div>
    );
  }
}

export default Tracker;
