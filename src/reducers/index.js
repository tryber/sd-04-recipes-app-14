import { combineReducers } from 'redux';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';
import fetchReducer from './fetchApi';
import loginReducer from './loginReducer';
import mealCategoryReducer from './mealCategoryReducer';
import drinkCategoryReducer from './drinkCategoryReducer';
import mealSelectedReducer from './mealSelectedReducer';
import drinkSelectedReducer from './drinkSelectedReducer';
import mealAllReducer from './mealAllReducer';
import drinkAllReducer from './drinkAllReducer';

const rootReducer = combineReducers({
  drinkAllReducer,
  drinkSelectedReducer,
  mealAllReducer,
  mealSelectedReducer,
  mealCategoryReducer,
  drinkCategoryReducer,
  reducerSearch,
  reducerFoods,
  reducerDrinks,
  fetchReducer,
  loginReducer,
});

export default rootReducer;
