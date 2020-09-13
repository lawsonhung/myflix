import React, { Component } from 'react';
import Shows from './Shows';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>MyFlix</h1>
        <Shows />
      </div>
    )
  }

}

export default HomePage