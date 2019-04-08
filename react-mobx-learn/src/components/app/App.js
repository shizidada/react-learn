import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "./App.less";

// 观察者
@inject('appStore')
@observer
class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);

    }

    addHandler = () => {
        // this.props.appStore.addList("...");
        console.log(this.props.appStore);
    }

    render() {
        const { list } = this.props.appStore;
        // console.log(list);
        return (
            <div className="app-container">
                <p>App Page</p>
                {
                    list.map((item) => {
                        return <p key={item.id}>{item.name}</p>
                    })
                }
                <button onClick={this.addHandler}>添加</button>
            </div>
        );
    }
}

export default App;