import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to our stater page</h1>
          <p>
            I created this repo to get us started and set up to start working!
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
