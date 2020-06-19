import React, { PureComponent } from 'react';

class Detail extends PureComponent {

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
    console.log(this.props);
  }


  render() {
    return <div>Detail</div>
  }
}

export default Detail;