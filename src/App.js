import React, { Component } from 'react';
import Shows from './components/Shows';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MyFlix</h1>
        <Shows />
      </div>
    )
  }
}

export default App;
