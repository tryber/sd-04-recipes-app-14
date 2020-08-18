export const REQUEST_API = 'REQUEST_API';
export const GET_FOOD_API = 'GET_FOOD_API';
export const GET_EMAIL = 'GET_EMAIL';
export const CHANGE_DONE = 'CHANGE_DONE';
export const CHANGE_INPROGRESS = 'CHANGE_INPROGRESS';
export const PASS_RECIPE = 'PASS_RECIPE';
export const BUTTON_FINALIZAR = 'BUTTON_FINALIZAR';

export function buttonFinalizar() {
  return { type: BUTTON_FINALIZAR };
}

export function passRecipe(receita) {
  return { type: PASS_RECIPE, receita };
}

export function changeDone() {
  return { type: CHANGE_DONE };
}

export function changeInprogress() {
  return { type: CHANGE_INPROGRESS };
}

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
