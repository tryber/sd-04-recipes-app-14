import { getDrinksCategory } from '../service/categoryApi';

export const REQUEST_DRINK_CATEGORY = 'REQUEST_DRINK_CATEGORY';
export const GET_DRINK_CATEGORY = 'GET_DRINK_CATEGORY';

function requestDrinkCategory() {
  return { type: REQUEST_DRINK_CATEGORY, isLoading: false };
}

function getDrinkCategoryData(category) {
  return {
    type: GET_DRINK_CATEGORY,
    isLoading: true,
    category,
  };
}

function fetchDrinkCategory() {
  return (dispatch) => {
    dispatch(requestDrinkCategory());
    return getDrinksCategory().then((category) => dispatch(getDrinkCategoryData(category)));
  };
}

export default fetchDrinkCategory;
