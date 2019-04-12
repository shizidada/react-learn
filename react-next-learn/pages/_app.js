/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-12 22:01:06 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-12 22:55:42
 */

import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import withStore from '../stores/withStore';

/**
 * 如果继承 App 会优先加载 App 显示
 */

class LearnApp extends App {

    componentDidMount() {
    }

    render() {
        const { Component, pageProps, store, router } = this.props;
        console.log(this.props);
        return (
            // <Container>
            <Provider {...store}>
                <div>
                    LearnApp
                </div>
                {/* <Layout router={router}> */}
                {/* <Component {...pageProps} /> */}
                {/* </Layout> */}
            </Provider>
            // </Container>
        )
    }
}

export default withStore(LearnApp);