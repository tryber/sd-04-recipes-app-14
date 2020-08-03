import { GET_EMAIL } from '../actions/actions';

const INITIAL_STATE = {
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};

export default loginReducer;
