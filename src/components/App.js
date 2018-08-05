import React, { Component } from 'react';
import './App.css';
import InputsView from './InputsView'
import TimeTable from './TimeTable'
import SuggestTimes from '../functions/SuggestTimes'

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
    this.setState({ times: SuggestTimes(inputs)})
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
