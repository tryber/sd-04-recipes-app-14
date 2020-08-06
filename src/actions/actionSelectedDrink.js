import { getDrinksFiltered } from '../service/categoryApi';

export const REQUEST_DRINK_SELECTED = 'REQUEST_DRINK_SELECTED';
export const GET_DRINK_SELECTED = 'GET_DRINK_SELECTED';

function requestDrinkSelected() {
  return { type: REQUEST_DRINK_SELECTED, isLoading: false };
}

function getDrinkSelectedData(data) {
  return {
    type: GET_DRINK_SELECTED,
    isLoading: true,
    data,
  };
}

export function fetchSelectedDrink(drink) {
  return (dispatch) => {
    dispatch(requestDrinkSelected());
    return getDrinksFiltered(drink).then((data) =>
      dispatch(getDrinkSelectedData(data)),
    );
  };
}
