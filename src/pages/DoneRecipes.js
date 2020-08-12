import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Selector from '../components/DoneRecipes/Selector';
import { DoneRecipeFilter } from '../actions/DoneRecipe';

const DoneRecipes = ({ name = 'Receitas Feitas', FilterDone }) => (
  <div>
    <div>
      <Header name={name} />
    </div>
    <div>
      <button data-testid="filter-by-all-btn" type="button" onClick={() => FilterDone('ALL')}>
        ALL
      </button>
      <button data-testid="filter-by-food-btn" type="button" onClick={() => FilterDone('FOODS')}>
        FOODS
      </button>
      <button data-testid="filter-by-drink-btn" type="button" onClick={() => FilterDone('DRINKS')}>
        DRINKS
      </button>
    </div>
    <div>
      <Selector />
    </div>
  </div>
);

DoneRecipes.propTypes = {
  FilterDone: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  FilterDone: (string) => dispatch(DoneRecipeFilter(string)),
});

export default connect(null, mapDispatchToProps)(DoneRecipes);
