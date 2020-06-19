import React, { PureComponent } from "react";

class IndexPage extends PureComponent {
  /**
   *
   * @param {NextAppContext} ctx
   */
  static getInitialProps({ asPath, pathname, query }) {
    return {
      name: query.name,
    };
  }

  render() {
    return <div>IndexPage</div>;
  }
}

export default IndexPage;
