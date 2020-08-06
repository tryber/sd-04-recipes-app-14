import { getAllMeals } from '../service/categoryApi';

export const REQUEST_ALL_MEAL = 'REQUEST_ALL_MEAL';
export const GET_ALL_MEAL = 'GET_ALL_MEAL';

export function requestAllMeal() {
  return { type: REQUEST_ALL_MEAL };
}

export function getAllMeal(data) {
  return { type: GET_ALL_MEAL, data };
}

export function fetchAllMeal() {
  return (dispatch) => {
    dispatch(requestAllMeal());
    return getAllMeals().then((data) => dispatch(getAllMeal(data)));
  };
}
