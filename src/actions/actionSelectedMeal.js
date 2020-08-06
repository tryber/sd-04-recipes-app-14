import { getMealFiltered } from '../service/categoryApi';

export const REQUEST_MEAL_SELECTED = 'REQUEST_MEAL_SELECTED';
export const GET_MEAL_SELECTED = 'GET_MEAL_SELECTED';

function requestMealSelected() {
  return { type: REQUEST_MEAL_SELECTED, isLoading: false };
}

function getMealSelectedData(data) {
  return {
    type: GET_MEAL_SELECTED,
    isLoading: true,
    data,
  };
}

export function fetchSelectedMeal(meal) {
  return (dispatch) => {
    dispatch(requestMealSelected());
    return getMealFiltered(meal).then((data) =>
      dispatch(getMealSelectedData(data)),
    );
  };
}
