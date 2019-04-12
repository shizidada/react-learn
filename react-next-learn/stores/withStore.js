import React from 'react';
import initStore from './index';

const isServer = typeof window === 'undefined';
const __NEXT_MOBX_STORE_NAME__ = '__NEXT_MOBX_STORE_NAME__';

const getOrCreateStore = (initialState) => {
    if (isServer) {
        return initStore(initialState)
    }
    if (!window[__NEXT_MOBX_STORE_NAME__]) {
        window[__NEXT_MOBX_STORE_NAME__] = initStore(initialState)
    }
    return window[__NEXT_MOBX_STORE_NAME__]
}

export default App => class AppWithMobx extends React.Component {
    static async getInitialProps(appContext) {
        // console.log("getInitialProps ==> ", appContext);
        const mobxStore = getOrCreateStore();
        appContext.ctx.mobxStore = mobxStore;
        let appProps = {};
        if (typeof App.getInitialProps === 'function') {
            appProps = await App.getInitialProps.call(App, appContext)
        }
        return { ...appProps, initialMobxState: mobxStore }
    }

    constructor(props) {
        super(props);
        // console.log("constructor ==> ", props);
        this.mobxStore = getOrCreateStore(props.initialMobxState)
    }

    render() {
        return <App {...this.props} store={this.mobxStore} />
    }
}
