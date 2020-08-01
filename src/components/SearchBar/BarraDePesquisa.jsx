import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addSearchSearchBar } from '../../action/actionSearch';
import { fetchApi } from '../../action/actionFoods';
import { fetchApiDrinks } from '../../action/actionDrinks';

function BarraDePesquisa({ inputSearch, searchBar, radio, requestAPIfoods, requestAPIdrinks }) {
  const primeiraLetra = (event) => {
    if (radio === 'primeiraletra') {
      if (searchBar.length >= 1) alert('Sua busca deve conter somente 1 (um) caracter');
      console.log(searchBar, searchBar.length);
    }
    inputSearch(event);
  };

  const FoodOrDrinks = () => {
    if (window.location.href.includes('bebidas')) return requestAPIdrinks(searchBar, radio);
    if (window.location.href.includes('comidas')) return requestAPIfoods(searchBar, radio);
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
      <button onClick={() => FoodOrDrinks()} data-testid="exec-search-btn">
        Pesquisar
      </button>
    </div>
  );
}

BarraDePesquisa.propTypes = {
  inputSearch: PropTypes.func.isRequired,
  radio: PropTypes.string.isRequired,
  requestAPIdrinks: PropTypes.func.isRequired,
  requestAPIfoods: PropTypes.func.isRequired,
  searchBar: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  searchBar: state.reducerSearch.searchBar,
  radio: state.reducerSearch.radio,
});

const mapDispatchToProps = (dispatch) => ({
  inputSearch: (e) => dispatch(addSearchSearchBar(e.target.value)),
  requestAPIfoods: (searchBar, radio) => dispatch(fetchApi(searchBar, radio)),
  requestAPIdrinks: (searchBar, radio) => dispatch(fetchApiDrinks(searchBar, radio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarraDePesquisa);
