import { REQUEST_API, REQUEST_API_SUCESS } from '../action/actionFoods';

const INITIAL_STATE = {
  isLoading: true,
  Foods: [],
};

const reducerFoods = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_API:
      console.log('REQUEST API');
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_API_SUCESS:
      console.log('REQUEST API SUCESS!!');
      return {
        ...state,
        Foods: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducerFoods;
