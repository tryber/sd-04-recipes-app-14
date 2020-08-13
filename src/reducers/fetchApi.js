import { GET_FOOD_API, REQUEST_API } from '../actions/actions';

const INITIAL_STATE = {
  foodData: {},
  receivedData: false,
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        receivedData: false,
      };
    case GET_FOOD_API:
      if (action.data.meals !== null) {
        return {
          ...state,
          foodData: action.data.meals.slice(0, 12),
          receivedData: true,
        };
      }
      return {
        ...state,
        foodData: action.data.meals.slice(0, 12),
        receivedData: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;
