import { REQUEST_ALL_DRINK, GET_ALL_DRINK } from '../actions/actionSelectAllD';

const INITIAL_STATE = {
  isLoading: false,
  drinkAll: [],
};

const drinkAllReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALL_DRINK:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ALL_DRINK:
      return {
        ...state,
        drinkAll: action.data.drinks.slice(0, 12),
        isLoading: true,
      };
    default:
      return state;
  }
};

export default drinkAllReducer;
