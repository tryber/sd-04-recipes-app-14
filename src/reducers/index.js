import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerSearch from './reducerSearch';

const rootReducer = combineReducers({ reducer, reducerSearch });

export default rootReducer;
