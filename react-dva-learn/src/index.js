import React, { Component } from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import dva from "dva";
// import { createHashHistory } from "history";

import "@assets/css/helloworld.css";
import "@assets/less/helloworld.less";

// TODO
// Warning: Please use `require("history").createHashHistory` instead of `require("history/createHashHistory")`.
// Support for the latter will be removed in the next major release.
const app = dva();

import indexModel from "./models/index";
import countModel from "./models/count";
app.model(indexModel);
app.model(countModel);

import HelloWorld from "./components/HelloWorld";
import Count from "./components/Count";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Count />
      </div>
    );
  }
}
app.router(() => <App />);

const hmr = Component => () => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
};
const init = hmr(app.start());
init();

// hmr
if (module.hot) {
  module.hot.accept("./routes", () => {
    init();
  });
}

console.log("this is ok");

// ReactDOM.render(<HelloWorld />, document.getElementById("app"));
// console.log("Hello World !");
