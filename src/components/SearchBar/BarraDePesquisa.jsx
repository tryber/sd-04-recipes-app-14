import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addSearchSearchBar } from '../../actions/actionSearch';
import { fetchApi } from '../../actions/actionFoods';
import { fetchApiDrinks } from '../../actions/actionDrinks';
import primeiraLetra from '../../Helper/SearchBar-PrimeiraLetra';
import FoodOrDrinks from './FoodOrDrinks';
import { ChangeRender } from '../../actions/actionChangeRender';

function BarraDePesquisa({
  inputSearch,
  searchBar,
  radio,
  requestAPIfoods,
  requestAPIdrinks,
  changeRender,
}) {
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Digite sua pesquisa"
        value={searchBar}
        onChange={(e) => primeiraLetra(e, inputSearch, radio, searchBar)}
      />
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={() => {
          changeRender(false);
          FoodOrDrinks(searchBar, radio, requestAPIdrinks, requestAPIfoods);
        }}
      >
        Pesquisar
      </button>
    </div>
  );
}

BarraDePesquisa.propTypes = {
  changeRender: PropTypes.func.isRequired,
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
  changeRender: (bool) => dispatch(ChangeRender(bool)),
  inputSearch: (e) => dispatch(addSearchSearchBar(e.target.value)),
  requestAPIfoods: (searchBar, radio) => dispatch(fetchApi(searchBar, radio)),
  requestAPIdrinks: (searchBar, radio) => dispatch(fetchApiDrinks(searchBar, radio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarraDePesquisa);
