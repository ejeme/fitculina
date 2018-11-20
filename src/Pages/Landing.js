import React, { Component } from 'react';
import logo from '../fitculina-logo.gif';

class Landing extends Component {
  render() {
    return (
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="Landing-logo" />
        <h1>Your first choice in healthy eats...</h1>
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
    );
  }
}

export default Landing;
