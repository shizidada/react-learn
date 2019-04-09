import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "./App.less";

// 观察者
@inject('appStore')
@observer 
class App extends Component {

    constructor(props) {
        super(props);
        // console.log("App constructor => ", props);
    }

    addHandler = () => {
        const { appStore } = this.props;
        appStore.addList({
            name: '苹果 ' + Math.random(),
            id: Math.random()
        });
        // this.forceUpdate();
        // console.log(this.props.appStore.list);
    }

    render() {
        const { list } = this.props.appStore;
        console.log("render list => ", list);
        return (
            <div className="app-container">
                <h1 className="app-title">App Page</h1>
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