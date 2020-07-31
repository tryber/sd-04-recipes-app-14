import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerSearch from './reducerSearch';
import reducerFoods from './reducerFoods';

const rootReducer = combineReducers({ reducer, reducerSearch, reducerFoods });

export default rootReducer;
