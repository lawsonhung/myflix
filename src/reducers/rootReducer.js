export default (state = {
  searchQuery: '',
  results: [],
  watchLater: [],
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

    case 'ADD_TO_WATCH_LATER':
      return {
        ...state,
        // watchLater: [],
        watchLater: [...state.watchLater, action.show]
      }

    default:
      return state;
  }
}