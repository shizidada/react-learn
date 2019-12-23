/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-12 22:01:06
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:31
 */

import React from "react";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";
import withStore from "../stores/withStore";

import BasicLayout from "../container/BasicLayout";

import "../common/interceptor";

// normalize
import "normalize.css";

/**
 * 如果继承 App 会优先加载 App 显示
 */

class LearnNextApp extends App {
  componentDidMount() {}

  render() {
    const { Component, pageProps, store, router } = this.props;
    // console.log("LearnNextApp  ==> ", this.props);
    return (
      <Container>
        <Provider {...store}>
          <BasicLayout router={router}>
            <Component {...pageProps} router={router} />
          </BasicLayout>
        </Provider>
      </Container>
    );
  }
}

export default withStore(LearnNextApp);
