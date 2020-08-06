const MEALCATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINKSCATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const MEALFILTERS = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const DRINKFILTERS = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const ALLMEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ALLDRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const getMealCategory = () => fetch(MEALCATEGORY).then((res) => res.json());
export const getDrinksCategory = () => fetch(DRINKSCATEGORY).then((res) => res.json());
export const getMealFiltered = (filtro) => fetch(`${MEALFILTERS}${filtro}`).then((res) => res.json());
export const getDrinksFiltered = (filtro) => fetch(`${DRINKFILTERS}${filtro}`).then((res) => res.json());
export const getAllMeals = () => fetch(ALLMEALS).then((res) => res.json());
export const getAllDrinks = () => fetch(ALLDRINKS).then((res) => res.json());
