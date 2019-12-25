/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-12 22:01:06
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:31
 */

import React from "react";
import { Container } from "next/app";
import { Provider } from "mobx-react";
import withStore from "../stores/withStore";

import BasicLayout from "../containers/BasicLayout";

import "../common/interceptor";

// normalize
import "normalize.css";

const LearnNextApp = ({ Component, pageProps, store, router }) => {
  // console.log("LearnNextApp :: ", Component, pageProps, store, router);
  return (
    <Container>
      <Provider {...store}>
        <BasicLayout router={router}>
          <Component {...pageProps} router={router} />
        </BasicLayout>
      </Provider>
    </Container>
  );
};

export default withStore(LearnNextApp);
