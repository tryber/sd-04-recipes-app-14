const MEALCATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINKSCATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export const getMealCategory = () => fetch(MEALCATEGORY).then((response) => response.json());
export const getDrinksCategory = () => fetch(DRINKSCATEGORY).then((response) => response.json());
