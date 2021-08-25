import React from "react";
import Header from "./HeaderComponent";
import SignIn from "./SignInComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Main);
