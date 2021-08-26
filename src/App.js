import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </Router>
    );
  }
}

export default App;


