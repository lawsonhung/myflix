import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>MyFlix</h1>
        <SearchBar />
        <Results />
      </div>
    )
  }

}

export default HomePage