export const ADD_SEARCH_TERMS_SEARCHBAR = 'ADD_SEARCH_TERMS_SEARCHBAR';
export const ADD_SEARCH_TERMS_RADIO = 'ADD_SEARCH_TERMS_RADIO';

export const addSearchSearchBar = (searchBar) => ({
  type: ADD_SEARCH_TERMS_SEARCHBAR,
  searchBar,
});

export const addSearchRadio = (radio) => ({
  type: ADD_SEARCH_TERMS_RADIO,
  radio,
});
