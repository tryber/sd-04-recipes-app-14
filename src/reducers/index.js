import { combineReducers } from 'redux';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';
import fecthReducer from './fetchApi';
import loginReducer from './loginReducer';
import mealCategoryReducer from './mealCategoryReducer';
import drinkCategoryReducer from './drinkCategoryReducer';

const rootReducer = combineReducers({
  mealCategoryReducer,
  drinkCategoryReducer,
  reducerSearch,
  reducerFoods,
  reducerDrinks,
  fecthReducer,
  loginReducer,
});

export default rootReducer;
