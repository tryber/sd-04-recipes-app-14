import { combineReducers } from 'redux';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';
import fetchReducer from './fetchApi';
import loginReducer from './loginReducer';
import reducerCarousel from './reducerCarousel';
import mealCategoryReducer from './mealCategoryReducer';
import drinkCategoryReducer from './drinkCategoryReducer';
import mealSelectedReducer from './mealSelectedReducer';
import drinkSelectedReducer from './drinkSelectedReducer';
import mealAllReducer from './mealAllReducer';
import drinkAllReducer from './drinkAllReducer';
import inProgressReducer from './inProgressReducer';
import buildSearchBtnReducer from './buildSearchBtnReducer';
import ChangeRender from './ChangeRender';
import ingredientsReducer from './ingredientReducer';
import DoneRecipe from './DoneRecipe';
import foodByArea from './foodByArea';

const rootReducer = combineReducers({
  inProgressReducer,
  ChangeRender,
  DoneRecipe,
  buildSearchBtnReducer,
  drinkAllReducer,
  drinkCategoryReducer,
  drinkSelectedReducer,
  fetchReducer,
  loginReducer,
  mealAllReducer,
  mealCategoryReducer,
  mealSelectedReducer,
  reducerCarousel,
  ingredientsReducer,
  reducerDrinks,
  reducerFoods,
  reducerSearch,
  foodByArea,
});

export default rootReducer;
