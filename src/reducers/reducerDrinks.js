import { REQUEST_API_DRINK, REQUEST_API_SUCESS_DRINK } from '../actions/actionDrinks';

const INITIAL_STATE = {
  isLoading: true,
  Drinks: [],
};

const reducerDrinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_DRINK:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCESS_DRINK:
      if (action.data.drinks !== null) {
        return {
          ...state,
          Drinks: action.data.drinks.slice(0, 12),
          isLoading: false,
        };
      }
      return {
        ...state,
        Drinks: action.data.drinks,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducerDrinks;
