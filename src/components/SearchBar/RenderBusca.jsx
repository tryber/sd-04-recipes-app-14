import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RenderFoods from '../RenderCards/RenderFoods';
import RenderDrinks from '../RenderCards/RenderDrinks';
import oneResultOrError from '../../Helper/SearchBar-Missing';

function RenderBusca({ drinks, foods }) {
  console.log(drinks, foods);
  if (window.location.href.includes('comidas')) {
    if (foods === null) {
      oneResultOrError(foods, 'comidas', 'idMeal');
      return null;
    }
    if (foods.length === 1) return <Redirect to={`/comidas/${foods[0].idMeal}`} />;
    return foods.map((e, index) => <RenderFoods foods={e} index={index} />);
  }
  if (window.location.href.includes('bebidas')) {
    return drinks.map((e, index) => <RenderDrinks drinks={e} index={index} />);
  }
  return null;
}

const mapStateToProps = (state) => ({
  drinks: state.reducerDrinks.Drinks,
  foods: state.reducerFoods.Foods,
});

export default connect(mapStateToProps)(RenderBusca);
