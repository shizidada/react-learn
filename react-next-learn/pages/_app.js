/*
 * @Author: Jiang.Jing
 * @Date: 2019-04-12 22:01:06
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-13 15:02:31
 */

import React, { useState } from "react";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";

import { fetchInitialStoreState, Store } from "../stores/store2";
import BasicLayout from "../containers/BasicLayout";
import "../common/interceptor";

class MooseMobxApp extends App {
  state = {
    store: new Store()
  };
  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();
    return {
      ...appProps,
      initialStoreState
    };
  }
  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.store.hydrate(props.initialStoreState);
    return state;
  }
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Provider store={this.state.store}>
          <BasicLayout router={router}>
            <Component {...pageProps} />
          </BasicLayout>
        </Provider>
      </Container>
    );
  }
}

// function MooseMobxApp({ Component, pageProps, router }) {
//   const [store, setStore] = useState(new Store());
//   return (
//     <Container>
//       <Provider store={store}>
//         <BasicLayout router={router}>
//           <Component {...pageProps} />
//         </BasicLayout>
//       </Provider>
//     </Container>
//   );
// }
// MooseMobxApp.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext);
//   const initialStoreState = await fetchInitialStoreState();
//   return {
//     ...appProps,
//     initialStoreState
//   };
// };
// MooseMobxApp.getDerivedStateFromProps = (props, state) => {
//   state.store.hydrate(props.initialStoreState);
//   return state;
// };
export default MooseMobxApp;

// import withStore from "../stores/withStore";
// const MooseApp = ({ Component, pageProps, store, router }) => {
//   // console.log("MooseApp :: ", Component, pageProps, store, router);
//   return (
//     <Container>
//       <Provider store={store}>
//       <BasicLayout router={router}>
//         <Component {...pageProps} router={router} />
//       </BasicLayout>
//       </Provider>
//     </Container>
//   );
// };
// export default withStore(MooseApp);
