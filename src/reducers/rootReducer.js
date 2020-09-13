export default (state = {
  searchQuery: 'Cucumber land',
}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery
      }

    default:
      return state;
  }
}