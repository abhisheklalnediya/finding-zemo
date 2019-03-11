import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './roomLayout';
import Seach from './search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Seach />
        <Room />
      </div>
    );
  }
}

export default App;
