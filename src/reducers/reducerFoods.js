import { REQUEST_API, REQUEST_API_SUCESS } from '../actions/actionFoods';

const INITIAL_STATE = {
  isLoading: true,
  Foods: [],
};

const reducerFoods = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCESS:
      return {
        ...state,
        Foods: action.data.meals.slice(0, 12),
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducerFoods;
