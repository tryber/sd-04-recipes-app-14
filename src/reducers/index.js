import { combineReducers } from 'redux';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';

const rootReducer = combineReducers({ reducerSearch, reducerFoods, reducerDrinks });

export default rootReducer;
