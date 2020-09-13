import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.updateSearchQuery(e.target.value);
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
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)