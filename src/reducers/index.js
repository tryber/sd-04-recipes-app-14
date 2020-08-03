import { combineReducers } from 'redux';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';
import fecthReducer from './fetchApi';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  reducerSearch,
  reducerFoods,
  reducerDrinks,
  fecthReducer,
  loginReducer,
});

export default rootReducer;
