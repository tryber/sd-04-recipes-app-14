import { connect } from 'react-redux';

import { redirectFoods, redirectDrinks } from '../../Helper/SearchBar-redirect';

function RenderBusca({ drinks, foods }) {
  if (window.location.href.includes('comidas')) {
    return redirectFoods(foods);
  }
  if (window.location.href.includes('bebidas')) {
    return redirectDrinks(drinks);
  }
  return null;
}

const mapStateToProps = (state) => ({
  drinks: state.reducerDrinks.Drinks,
  foods: state.reducerFoods.Foods,
});

export default connect(mapStateToProps)(RenderBusca);
