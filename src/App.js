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
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/homepage" component={Home} />
            <Route exact path="/gamepage" component={GamePage} />
            <Redirect to="/homepage" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
