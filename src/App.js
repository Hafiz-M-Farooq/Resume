import { hot } from "react-hot-loader/root";
import React, { useLayoutEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./index";

import Home from "./components/Home";

const App = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
};

export default hot(App);
