import { REQUEST_ALL_MEAL, GET_ALL_MEAL } from '../actions/actionSelectAllM';

const INITIAL_STATE = {
  isLoading: false,
  mealAll: [],
};

const mealAllReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALL_MEAL:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ALL_MEAL:
      return {
        ...state,
        mealAll: action.data.meals.slice(0, 12),
        isLoading: true,
      };
    default:
      return state;
  }
};

export default mealAllReducer;
