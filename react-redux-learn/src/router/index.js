import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "../components/index";

const Router = () => (
    <BrowserRouter>
        <Route path="/" exact component={Index} />
    </BrowserRouter>
);

export default Router;


