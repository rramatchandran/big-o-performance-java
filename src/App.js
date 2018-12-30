import React, { Component } from 'react';
import Charts from './Charts';
import Calcs from './Calcs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Big-O Notation Analyzer</h2>
        </div>
        <div className="App-left">
          <Charts />
        </div>
        <div className="App-right">
          <Calcs />
        </div>
      </div>
    );
  }
}

export default App;
