import React, { Component } from 'react';
import logo from './fitculina-logo.gif';
import Landing from './Pages/Landing';
import Menu from './Pages/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Menu />
      </div>
    );
  }
}

export default App;
