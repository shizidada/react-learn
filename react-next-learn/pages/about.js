// export default () => <div>about</div>

import React, { Component } from 'react';

import GeneratorImageCode from '../components/GeneratorImageCode'

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
    // console.log("About  componentDidMount ==> ", this.props);
    GeneratorImageCode({
      el: document.getElementById('container'),
      width: 310, // 可选, 默认310
      height: 155, // 可选, 默认155
      onSuccess: function () {
        console.log('onSuccess')
      },
      onFail: function () {
        console.log('onFail')
      },
      onRefresh: function () {
        console.log('onRefresh')
      }
    })
  }


  render() {
    return (
      <div>about
        <div id='container'></div>
      </div>
    )
  }

}

export default About;
