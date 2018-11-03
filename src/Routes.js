import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from "./components/Home";
import User from "./components/User";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />

    <Route
      path='/login'
      // pass along props to component on top of router props
      render={(props) => <Login {...props} {...childProps} />}
    />
    <AuthenticatedRoute path="/user" exact component={User} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
