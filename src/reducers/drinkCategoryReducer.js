import {
  REQUEST_DRINK_CATEGORY,
  GET_DRINK_CATEGORY,
} from '../actions/actionDrinkCategory';

const INITIAL_STATE = {
  isLoading: false,
  drinkCategory: [],
};

const drinkCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DRINK_CATEGORY:
      return {
        ...state,
        isLoading: false,
      };
    case GET_DRINK_CATEGORY:
      return {
        ...state,
        drinkCategory: action.category.drinks.slice(0, 5),
        isLoading: true,
      };
    default:
      return state;
  }
};

export default drinkCategoryReducer;
