import React, { Component } from "react";
import { BrowserRouter, HashRouter, IndexRoute, Switch, Route } from "react-router-dom";

import Index from "../components/index";
import Detail from "../components/detail";

// HashRouter
// BrowserRouter
const RouterComponent = () => (
    <BrowserRouter>
        <Index >
            <Switch>
                <Route path="/detail" exact component={Detail}></Route>
            </Switch>
        </Index>
    </BrowserRouter>
);

export default RouterComponent;

export {
    RouterComponent as Router
};

