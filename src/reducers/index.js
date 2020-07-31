import { combineReducers } from 'redux';
import fecthReducer from './fetchApi';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ fecthReducer, loginReducer });

export default rootReducer;
