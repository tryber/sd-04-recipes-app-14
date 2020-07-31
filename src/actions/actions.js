import { getFood } from '../service';

export const REQUEST_API = 'REQUEST_API';
export const GET_FOOD_API = 'GET_FOOD_API';
export const GET_EMAIL = 'GET_EMAIL';

export function requestApi() {
  return { type: REQUEST_API };
}

export function getFoodApi(data) {
  return { type: GET_FOOD_API, data };
}

export function fetchFoodApi(data) {
  return (dispatch) => {
    dispatch(requestApi);
    dispatch(getFoodApi(data));
  };
}

export function getEmail(email) {
  return { type: GET_EMAIL, email };
}
