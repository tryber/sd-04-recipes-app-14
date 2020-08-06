import { getMealCategory } from '../service/categoryApi';

export const REQUEST_MEAL_CATEGORY = 'REQUEST_MEAL_CATEGORY';
export const GET_MEAL_CATEGORY = 'GET_MEAL_CATEGORY';

function requestMealCategory() {
  return { type: REQUEST_MEAL_CATEGORY, isLoading: false };
}

function getMealCategoryData(category) {
  return {
    type: GET_MEAL_CATEGORY,
    isLoading: true,
    category,
  };
}

export function fetchMealCategory() {
  return (dispatch) => {
    dispatch(requestMealCategory());
    return getMealCategory().then((category) => dispatch(getMealCategoryData(category)));
  };
}
