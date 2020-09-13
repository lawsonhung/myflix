import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shows extends Component {

  render() {
    return (
      <div>
        <p>Results for {this.props.searchQuery}</p>
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    searchQuery: store.searchQuery
  }
}

export default connect(mapStateToProps, null)(Shows)