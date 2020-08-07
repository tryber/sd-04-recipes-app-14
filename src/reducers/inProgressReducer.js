import { CHANGE_INPROGRESS, CHANGE_DONE } from '../actions/actions';
import IngredientCheck from '../components/IngredientList/IngredientCheck';

const INITIAL_STATE = {
  inprogress: false,
  done: false,
};

const inprogressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DONE:
      return {
        ...state,
        done: true,
      };
    case CHANGE_INPROGRESS:
      return {
        ...state,
        inprogress: true,
      };
    default:
      return state;
  }
};

export default inprogressReducer;
