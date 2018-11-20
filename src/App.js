import React, { Component } from 'react';
import logo from './fitculina-logo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Your first choice with healthy eats...</h1>
          <p>Click below to see the menu plan</p>
          <a
            className="App-link"
            href="https://instagram.com/fitculina"
            target="_blank"
            rel="noopener noreferrer"
          >
            fitculina
          </a>
        </header>
      </div>
    );
  }
}

export default App;
