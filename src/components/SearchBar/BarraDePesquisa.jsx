import React from 'react';
import { connect } from 'react-redux';
import { addSearchSearchBar } from '../../action/actionSearch';

function BarraDePesquisa({ inputSearch, searchBar, radio }) {
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Digite sua pesquisa"
        value={searchBar}
        onChange={(e) => inputSearch(e)}
      ></input>
      <button data-testid="exec-search-btn">Pesquisar</button>
      {radio}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchBar: state.reducerSearch.searchBar,
  radio: state.reducerSearch.radio,
});

const mapDispatchToProps = (dispatch) => ({
  inputSearch: (e) => dispatch(addSearchSearchBar(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarraDePesquisa);
