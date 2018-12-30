import React, { Component } from 'react';
import './Calcs.css';

function factorial(x) {
  if(!x) {
    return 1;
  }
  if (x === 0){
    return 1;
  }
  return x * factorial(x-1);
}

class Calcs extends Component {
  constructor(props){
    super(props);
    this.state = {value: 0};
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="calcsDiv">
        <h2>Big O Calculations</h2>
        <label>Enter 'n' value:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <p><strong>Constant:</strong> <span>1</span></p>
        <p><strong>Logarithmic:</strong> <span>{Math.log2(this.state.value)}</span></p>
        <p><strong>Linear:</strong> <span>{this.state.value}</span></p>
        <p><strong>Quadratic:</strong> <span>{this.state.value * this.state.value}</span></p>
        <p><strong>Exponential:</strong> <span>{Math.pow(2, this.state.value)}</span></p>
        <p><strong>Factorial:</strong> <span>{factorial(this.state.value)}</span></p>
      </div>
    );
  }
}

export default Calcs;
