import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import WatchLater from './WatchLater';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>MyFlix</h1>
        <SearchBar />
        <Results />
        <WatchLater />
      </div>
    )
  }

}

export default HomePage