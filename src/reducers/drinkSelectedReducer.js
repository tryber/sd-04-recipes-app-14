import {
  REQUEST_DRINK_SELECTED,
  GET_DRINK_SELECTED,
} from '../actions/actionSelectedDrink';

const INITIAL_STATE = {
  isLoading: false,
  drinkSelected: [],
};

const drinkSelectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DRINK_SELECTED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_DRINK_SELECTED:
      return {
        ...state,
        drinkSelected: action.data.drinks.slice(0, 12),
        isLoading: true,
      };
    default:
      return state;
  }
};

export default drinkSelectedReducer;
