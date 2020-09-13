import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Shows from './Shows';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>MyFlix</h1>
        <SearchBar />
        <Shows />
      </div>
    )
  }

}

export default HomePage