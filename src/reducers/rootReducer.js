export default (state = {
  searchQuery: '',
  results: [],
}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery
      }

    case 'UPDATE_RESULTS':
      return {
        ...state,
        results: action.results
      }

    default:
      return state;
  }
}