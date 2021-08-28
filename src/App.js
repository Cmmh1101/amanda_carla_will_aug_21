import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import Navigation from "./components/navigation/Navigation";
import Emojis from "./components/Emojis";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/homepage" component={Home} />
            <Route exact path="/emojis" component={Emojis} />
            <Redirect to="/homepage" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
