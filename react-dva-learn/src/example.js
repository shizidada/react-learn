import React from "react";
import dva from "dva";

// 1. Initialize
const app = dva();

// 2. Model
import countModel from "./models/count/index";
app.model(countModel);

// 3. View
import Count from "./components/Count";

// 4. Router
app.router(() => <Count />);

// 5. Start
app.start("#app");
