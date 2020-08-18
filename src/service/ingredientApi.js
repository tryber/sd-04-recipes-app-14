const FOODINGREDIENT =
  'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINKINGREDIENT =
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const FMAININGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const DMAININGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const fetchFoodIngredient = () =>
  fetch(FOODINGREDIENT).then((res) => res.json());
export const fetchDrinkIngredient = () =>
  fetch(DRINKINGREDIENT).then((res) => res.json());
export const fetchMainIngMeal = (filtro) =>
  fetch(`${FMAININGREDIENT}${filtro}`)
    .then((res) => res.json())
    .then((data) => data.meals.slice(0, 12));
export const fetchMainIngDrink = (filtro) =>
  fetch(`${DMAININGREDIENT}${filtro}`)
    .then((res) => res.json())
    .then((data) => data.drinks.slice(0, 12));
