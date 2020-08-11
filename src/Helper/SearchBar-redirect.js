import React from 'react';
import { Redirect } from 'react-router-dom';
import oneResultOrError from './SearchBar-Missing';

export const redirectFoods = (foods) => {
  if (foods === null) {
    oneResultOrError(foods);
    return null;
  }
  if (foods.length === 1) return <Redirect to={`/comidas/${foods[0].idMeal}`} />;
}

export const redirectDrinks = (drinks) => {
  if (drinks === null) {
    oneResultOrError(drinks);
    return null;
  }
  if (drinks.length === 1) return <Redirect to={`/bebidas/${drinks[0].idDrinks}`} />;
}
