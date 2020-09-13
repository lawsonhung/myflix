import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

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
    )
  }

  mapThroughResults = () => {
    if (this.props.results.Search) {
      return this.props.results.Search.map(result => {
        return(
          <li key={result.imdbID}>
            <img src={result.Poster} alt={`${result.Title} poster`} />
            {result.Title} ({result.Year})
            <button>Watch later</button>
          </li>
          )
        }
      )
    } else {
      return (
        <p>No search results yet.</p>
      )
    }
  }

  render() {
    return (
      <div>
        <p>Results for {this.props.searchQuery}</p>
        {this.renderResults()}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    searchQuery: store.searchQuery,
    results: store.results
  }
}

export default connect(mapStateToProps, null)(Results)