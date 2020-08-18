import {
  REQUEST_AREAS,
  RECEIVED_AREAS,
  REQUEST_FOOD_BY_AREA,
  RECEIVED_FOODS,
} from '../actions/actionFoodByArea';

const INITIAL_STATE = {
  isFetching: false,
  areas: [],
  foods: [],
};

const foodByArea = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_AREAS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_AREAS:
      return {
        ...state,
        areas: action.areas,
        isFetching: false,
      };
    case REQUEST_FOOD_BY_AREA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_FOODS:
      return {
        ...state,
        foods: action.foods.meals,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default foodByArea;
