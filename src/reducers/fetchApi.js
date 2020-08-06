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
      return {
        ...state,
        foodData: action.data.meals,
        receivedData: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;
