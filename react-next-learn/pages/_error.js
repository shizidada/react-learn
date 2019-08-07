import React, { Component } from 'react'

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    // console.log("Error  => ", res, err);
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return <div>
      {
        this.props.statusCode
      }
      <h1>NOT FOUND ...</h1>
    </div>
  }
}