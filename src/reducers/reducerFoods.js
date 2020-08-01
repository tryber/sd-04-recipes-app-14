import { REQUEST_API, REQUEST_API_SUCESS } from '../action/actionFoods';

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
        Foods: action.data.meals,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducerFoods;
