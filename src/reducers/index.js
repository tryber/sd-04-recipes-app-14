import { combineReducers } from 'redux';
import reducer from './reducer';
import fecthReducer from './fetchApi';
import loginReducer from './loginReducer'

const rootReducer = combineReducers({ reducer, fecthReducer, loginReducer });

export default rootReducer;
