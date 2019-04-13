// export default () => <div>about</div>

import React, { Component } from 'react';

class About extends Component {

  /**
   * 
   * @param {NextAppContext} ctx 
   */
  static getInitialProps({ asPath, pathname, query }) {
    // console.log("About  getInitialProps ==> ", ctx);
    return {
      name: query.name
    }
  }

  componentDidMount() {
    console.log("About  componentDidMount ==> ", this.props);
  }


  render() {
    return (
      <div>about</div>
    )
  }

}

export default About;
