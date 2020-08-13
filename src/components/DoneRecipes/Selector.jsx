import React from 'react';
import { useSelector } from 'react-redux';
import DoneFoods from './DoneFoods';
import DoneDrinks from './DoneDrinks';

function Selector() {
  const FilterDoneRecipes = useSelector((state) => state.DoneRecipe.DoneShow);
  const DoneRecipesArray = JSON.parse(localStorage.getItem('doneRecipes'));
  const FilteredFoods = DoneRecipesArray.filter((element) => element.type === 'comida');
  const FilteredDrink = DoneRecipesArray.filter((element) => element.type === 'bebida');

  if (FilterDoneRecipes === 'ALL') {
    return DoneRecipesArray.map((e, index) => {
      if (e.type === 'comida') return <DoneFoods food={e} index={index} />;
      return <DoneDrinks drink={e} index={index} />;
    });
  }
  if (FilterDoneRecipes === 'FOODS') {
    return FilteredFoods.map((e, index) => <DoneFoods food={e} index={index} />);
  }
  if (FilterDoneRecipes === 'DRINKS') {
    return FilteredDrink.map((e, index) => <DoneDrinks drink={e} index={index} />);
  }
}

export default Selector;
