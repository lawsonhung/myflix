import React, { Component } from 'react';
import { connect } from 'react-redux';

class WatchLater extends Component {

  renderWatchLater = () => {
    console.log(this.props.watchLater);
    return(
      <ul>
        {this.props.watchLater.map((show, showIndex) => {
          return(
            <li key={show.imdbID}>
              {show.Title} ({show.Year})
              <button onClick={() => this.removeFromWatchLater(showIndex, show.imdbID)}>Remove</button>
            </li>
          )
        })}
      </ul>
    )
  }

  removeFromWatchLater = (showIndex, showID) => {
    const button = document.getElementById(`${showID} button`)
    this.props.removeFromWatchLater(showIndex);
    if (button) button.disabled = false;
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromWatchLater: (watchLaterIndex) => {
      dispatch({
        type: 'REMOVE_FROM_WATCH_LATER',
        watchLaterIndex: watchLaterIndex
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchLater)