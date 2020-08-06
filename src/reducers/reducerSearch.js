import { ADD_SEARCH_TERMS_SEARCHBAR, ADD_SEARCH_TERMS_RADIO } from '../actions/actionSearch';

const INITIAL_STATE = {
  searchBar: '',
  radio: 'ingrediente',
};

const reducerSearch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SEARCH_TERMS_SEARCHBAR:
      return {
        ...state,
        searchBar: action.searchBar,
      };
    case ADD_SEARCH_TERMS_RADIO:
      return {
        ...state,
        radio: action.radio,
      };
    default:
      return state;
  }
};

export default reducerSearch;
