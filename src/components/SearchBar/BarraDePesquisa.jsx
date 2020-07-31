import React from 'react';
import { connect } from 'react-redux';
import { addSearchSearchBar } from '../../action/actionSearch';
import { fetchApi } from '../../action/actionFoods';

function BarraDePesquisa({ inputSearch, searchBar, radio, requestAPI }) {
  const primeiraLetra = (event) => {
    if (radio === 'primeiraletra') {
      if (searchBar.length >= 1) alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(searchBar, searchBar.length);
    }
    inputSearch(event);
  };

  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Digite sua pesquisa"
        value={searchBar}
        onChange={(e) => primeiraLetra(e)}
      />
      <button onClick={() => requestAPI(searchBar, radio)} data-testid="exec-search-btn">
        Pesquisar
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchBar: state.reducerSearch.searchBar,
  radio: state.reducerSearch.radio,
});

const mapDispatchToProps = (dispatch) => ({
  inputSearch: (e) => dispatch(addSearchSearchBar(e.target.value)),
  requestAPI: (searchBar, radio) => dispatch(fetchApi(searchBar, radio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarraDePesquisa);
