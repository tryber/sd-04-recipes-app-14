import { combineReducers } from 'redux';
import fecthReducer from './fetchApi';
import loginReducer from './loginReducer';
import mealCategoryReducer from './mealCategoryReducer';
import drinkCategoryReducer from './drinkCategoryReducer';

const rootReducer = combineReducers({
  fecthReducer,
  loginReducer,
  mealCategoryReducer,
  drinkCategoryReducer,
});

export default rootReducer;
