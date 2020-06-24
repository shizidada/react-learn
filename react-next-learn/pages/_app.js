/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-12 22:01:06
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:31
 */

import React from "react";
import App, { Container } from "next/app";

import "../common/interceptor";

import "./global.less";

class MooseApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="moose-container">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}
export default MooseApp;
