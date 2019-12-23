// export default () => <div>about</div>

import React, { Component } from "react";

class AboutPage extends Component {
  /**
   *
   * @param {NextAppContext} ctx
   */
  static getInitialProps({ asPath, pathname, query }) {
    // console.log("About  getInitialProps ==> ", ctx);
    return {
      name: query.name
    };
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default AboutPage;
