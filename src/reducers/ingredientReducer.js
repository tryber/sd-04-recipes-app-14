import { ING_F_SELECTED, ING_D_SELECTED } from '../actions/actionIngredient';

const INITIAL_STATE = {
  food: '',
  drink: '',
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ING_F_SELECTED:
      return {
        ...state,
        food: action.food,
        drink: '',
      };
    case ING_D_SELECTED:
      return {
        ...state,
        drink: action.drink,
        food: '',
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
