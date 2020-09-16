import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

  renderResultCt = () => {
    const resultCt = this.props.results.totalResults;
    if (resultCt)
      return (
        <p>There are {resultCt} result(s) in total.</p>
      );
  }

  renderResults = () => {
    if (this.props.results === null)
      return (
        <p>No search results.</p>
      )
    else if (this.props.results.Response === 'True'){
      return (
        <ul>{this.mapThroughResults()}</ul>
      )
    } else 
    return (
    <p>{this.props.results.Error}</p>
    );
  }

  mapThroughResults = () => {
    if (this.props.results.Search) {
      return this.props.results.Search.map(result => {
        return(
          <li key={result.imdbID}>
            {/* <img src={result.Poster} alt={`${result.Title} poster`} />
            <br /> */}
            {result.Title} ({result.Year})
            <button id={`${result.imdbID} button`} onClick={(e) => this.addToWatchLater(e, result)}>Watch later</button>
          </li>
          )
        }
      )
    } else {
      return (
        <p>No search results yet.</p>
      );
    }
  }

  addToWatchLater = (e, show) => {
    e.target.disabled = true;
    this.props.addToWatchLater(show);
  }

  disableButtons = () => {
    this.props.watchLater.map(watchLaterShow => {
      const button = document.getElementById(`${watchLaterShow.imdbID} button`);
      if (button) {
        button.disabled = true;
        button.classList.add('disabled');
      }
      return null;
    })
  }

  componentDidMount = () => {
    this.disableButtons();
  }

  componentDidUpdate = () => {
    this.disableButtons();
  }

  render() {
    return (
      <div>
        <p>Results for {this.props.searchQuery}</p>
        {this.renderResultCt()}
        {this.renderResults()}
        {/* {this.disableButtons()} */}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    searchQuery: store.searchQuery,
    results: store.results,
    watchLater: store.watchLater
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToWatchLater: (show) => {
      dispatch({
        type: 'ADD_TO_WATCH_LATER',
        show: show
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)