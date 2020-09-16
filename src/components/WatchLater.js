import React, { Component } from 'react';
import { connect } from 'react-redux';

class WatchLater extends Component {

  renderWatchLater = () => {
    console.log(this.props.watchLater);
    return(
      <ul>
        {this.props.watchLater.map(show => {
          return(
            <li key={show.imdbID}>
              {show.Title} ({show.Year})
              <button onClick={() => this.removeFromWatchLater(show)}>Remove</button>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return(
      <div>
        <p>Your watch later list: </p>
        {this.renderWatchLater()}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    watchLater: store.watchLater
  }
}

export default connect(mapStateToProps, null)(WatchLater)