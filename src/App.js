import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import Navigation from "./components/navigation/Navigation";
import GamePage from "./pages/gamepage/GamePage";
import Footer from "./components/footer/Footer";
import Team from "./components/homepage/Team";
import "./App.scss";
import Features from "./components/homepage/Features";
import Rules from "./components/homepage/Rules";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/homepage" component={Home} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/gamepage" component={GamePage} />
            <Route exact path="/contactus" component={Team} />
            <Redirect to="/homepage" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
