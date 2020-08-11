import { REQUEST_MEAL_SELECTED, GET_MEAL_SELECTED } from '../actions/actionSelectedMeal';

const INITIAL_STATE = {
  isLoading: false,
  mealSelected: [],
};

const mealSelectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MEAL_SELECTED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MEAL_SELECTED:
      if (action.data.meals !== null) {
        return {
          ...state,
          mealSelected: action.data.meals.slice(0, 12),
          isLoading: true,
        };
      }
      return {
        ...state,
        mealSelected: action.data.meals,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default mealSelectedReducer;
