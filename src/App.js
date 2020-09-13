import React, { Component } from 'react';
import HomePage from './components/HomePage';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>

        <Route path={'/'}
          render={(routerProps) => <HomePage 
            routerProps={routerProps} />} />

      </Switch>
    )
  }
}

export default withRouter(App);
