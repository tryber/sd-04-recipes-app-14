import { getAreas, getFoodByArea, getAllFoods } from '../service/foodByAreaApi';

export const REQUEST_AREAS = 'REQUEST_AREAS';
const requestAreas = () => ({ type: REQUEST_AREAS });

export const RECEIVED_AREAS = 'RECEIVED_AREAS';
const receivedAreas = (areas) => ({ type: RECEIVED_AREAS, areas });

export const REQUEST_FOOD_BY_AREA = 'REQUEST_FOOD_BY_AREA';
const requestFoodByArea = () => ({ type: REQUEST_FOOD_BY_AREA });

export const RECEIVED_FOODS = 'RECEIVED_FOODS';
const receivedFoods = (foods) => ({ type: RECEIVED_FOODS, foods });

export function fetchAreas() {
  return (dispatch) => {
    dispatch(requestAreas());
    getAreas().then((json) => dispatch(receivedAreas(json.meals)));
  };
}

export function fetchFoods(area) {
  return (dispatch) => {
    dispatch(requestFoodByArea());
    getFoodByArea(area).then((json) => dispatch(receivedFoods(json)));
  };
}

export function fetchAllFoods() {
  return (dispatch) => {
    dispatch(requestFoodByArea());
    getAllFoods().then((json) => dispatch(receivedFoods(json)));
  };
}
