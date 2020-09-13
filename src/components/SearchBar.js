import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.updateSearchQuery(e.target.value);
    this.fetchShows(e.target.value);
  }

  fetchShows = (searchQuery) => {
    fetch(`http://www.omdbapi.com/?apikey=a9602605&s=${searchQuery}`)
    .then(res => res.json())
    .then(searchResult => {
      this.props.updateResults(searchResult);
    })
  }

  render() {
    return (
      <div>
        <label htmlFor='search'>Show title: </label>
        <input id='search' onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchQuery: (searchQuery) => {
      dispatch({ 
        type: 'UPDATE_SEARCH_QUERY', 
        searchQuery: searchQuery 
      })
    },

    updateResults: results => {
      dispatch({
        type: 'UPDATE_RESULTS',
        results: results
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)