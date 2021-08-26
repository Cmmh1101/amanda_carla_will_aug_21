import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
