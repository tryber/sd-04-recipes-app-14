import React from 'react';
import { Redirect } from 'react-router-dom';
import oneResultOrError from './SearchBar-Missing';
import RenderFoods from '../components/RenderCards/RenderFoods';
import RenderDrinks from '../components/RenderCards/RenderDrinks';

export const redirectFoods = (foods) => {
  if (foods === null) {
    oneResultOrError(foods);

    return null;
  }
  if (foods.length === 1) return <Redirect to={`/comidas/${foods[0].idMeal}`} />;
  return foods.map((e, index) => <RenderFoods foods={e} index={index} />);
};

export const redirectDrinks = (drinks) => {
  if (drinks === null) {
    oneResultOrError(drinks);
    return null;
  }
  if (drinks.length === 1) return <Redirect to={`/bebidas/${drinks[0].idDrinks}`} />;
  return drinks.map((e, index) => <RenderDrinks drinks={e} index={index} />);
};
