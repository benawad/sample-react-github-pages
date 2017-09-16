import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </Switch>
  </BrowserRouter>
);
