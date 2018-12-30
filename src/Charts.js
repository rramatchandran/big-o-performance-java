import React, { Component } from 'react';
import './Charts.css';
var LineChart = require("react-chartjs").Line;

class Charts extends Component {

  render() {
    var constantData = {
        labels: ['','','','','','time'],
        datasets: [{
            label: 'O(1) - Constant',
            data: [1, 1, 1, 1, 1, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var logData = {
        labels: ['','','','','','','','','time'],
        datasets: [{
            label: 'O(1) - Logarithmic',
            data: [0, 0, 1, 3.3219280949, 4.3219280949, 4.9068905956, 5.321928, 5.643856, 5.906891],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var linearData = {
        labels: ['','','','','','','','','time'],
        datasets: [{
            label: 'O(n) - Linear',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var quadData = {
        labels: ['','','','','','','','','time'],
        datasets: [{
            label: 'O(n2) - Quadratic',
            data: [0, 1, 4, 9, 16, 25, 36, 49, 64],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var expData = {
        labels: ['','','','','','','','','time'],
        datasets: [{
            label: 'O(c^2) - Exponential',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var factData = {
        labels: ['','','','','','','','','time'],
        datasets: [{
            label: 'O(n!) - Factorial',
            data: [1, 1, 2, 6, 24, 120, 720, 5040, 40320],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var chartOptions = {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
    };

    return (
      <div className="chartsDiv">
        <h2>Sample Big O Graphs</h2>
        <h3>O(1) - Constant</h3>
        <LineChart className="Chart" data={constantData} options={chartOptions} width="400" height="200"/>
        <h3>O(log n) - Logarithmic</h3>
        <LineChart className="Chart" data={logData} options={chartOptions} width="400" height="200"/>
        <h3>O(n) - Linear</h3>
        <LineChart className="Chart" data={linearData} options={chartOptions} width="400" height="200"/>
        <h3>O(n^2) - Quadratic</h3>
        <LineChart className="Chart" data={quadData} options={chartOptions} width="400" height="200"/>
        <h3>O(c^n) - Exponential</h3>
        <LineChart className="Chart" data={expData} options={chartOptions} width="400" height="200"/>
        <h3>O(n!) - Factorial</h3>
        <LineChart className="Chart" data={factData} options={chartOptions} width="400" height="200"/>
      </div>
    );
  }
}

export default Charts;
