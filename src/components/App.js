import React, { Component } from "react";
import './App.css';

import TimeTable from "./organisms/TimeTable"
import InputForm from "./organisms/InputForm";

// entry point
class App extends Component {
  render() {
    return (
      <div>
        <InputForm/>
        <TimeTable/>
      </div>
    );
  }
}

export default App;
