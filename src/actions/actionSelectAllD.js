import { getAllDrinks } from '../service/categoryApi';

export const REQUEST_ALL_DRINK = 'REQUEST_ALL_DRINK';
export const GET_ALL_DRINK = 'GET_ALL_DRINK';

function requestAllDrinks() {
  return { type: REQUEST_ALL_DRINK };
}

function getAllDrink(data) {
  return { type: GET_ALL_DRINK, data };
}

export function fetchAllDrinks() {
  return (dispatch) => {
    dispatch(requestAllDrinks());
    return getAllDrinks().then((data) => dispatch(getAllDrink(data)));
  };
}
