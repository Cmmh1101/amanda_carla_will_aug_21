import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import Navigation from "./components/navigation/Navigation";
import "./app.scss";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route to="/" component={Home} />
            <Route to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
