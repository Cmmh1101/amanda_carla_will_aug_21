import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";
import "./css/roomComponent.css";
import "./css/displayStudent.css";
import "./css/formComponent.css";
import "./css/timerComponent.css";
import "./css/headerComponent.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
