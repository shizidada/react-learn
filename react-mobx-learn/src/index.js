console.log("Hello React !");
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/App";

import { Provider } from "mobx-react"

import stores from './stores'

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById("app")
);
