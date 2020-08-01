import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';
import reducerDrinks from './reducerDrinks';

const rootReducer = combineReducers({ reducer, reducerSearch, reducerFoods, reducerDrinks });

export default rootReducer;
