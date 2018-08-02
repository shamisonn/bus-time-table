import React, { Component } from 'react';
import './App.css';
import InputsView from './InputsView'
import TimeTable from './TimeTable'
import suggestTimes from '../functions/SuggestTimes'

// entry point
class App extends Component {
  constructor() {
    super();
    this.state = {
      times: []
    };
    this.suggest = this.suggest.bind(this)
  }

  suggest(inputs) {
    this.setState({ times: suggestTimes(inputs)})
  }

  render() {
    return (
      <div className="App">
        <InputsView suggest={this.suggest}/>
        <TimeTable suggestTimes={this.state.times}/>
      </div>
    );
  }
}

export default App;
