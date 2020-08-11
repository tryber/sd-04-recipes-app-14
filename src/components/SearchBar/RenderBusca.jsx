import React from 'react';
import { connect } from 'react-redux';
import RenderFoods from '../RenderCards/RenderFoods';
import RenderDrinks from '../RenderCards/RenderDrinks';
import { redirectFoods } from '../../Helper/SearchBar-redirect';

function RenderBusca({ drinks, foods }) {
  console.log(drinks, foods);
  if (window.location.href.includes('comidas')) {
    redirectFoods(foods);
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
