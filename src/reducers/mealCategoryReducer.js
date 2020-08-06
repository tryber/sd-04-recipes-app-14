import {
  REQUEST_MEAL_CATEGORY,
  GET_MEAL_CATEGORY,
} from '../actions/actionMealCategory';

const INITIAL_STATE = {
  isLoading: false,
  mealCategory: [],
};

const mealCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MEAL_CATEGORY:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MEAL_CATEGORY:
      return {
        ...state,
        mealCategory: action.category.meals.slice(0, 5),
        isLoading: true,
      };
    default:
      return state;
  }
};

export default mealCategoryReducer;
