import { CHANGE_INPROGRESS, CHANGE_DONE, PASS_RECIPE, BUTTON_FINALIZAR } from '../actions/actions';

const INITIAL_STATE = {
  inprogress: false,
  done: false,
  receita: {},
  button: false,
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
    case PASS_RECIPE:
      return {
        ...state,
        receita: action.receita,
      };
    case BUTTON_FINALIZAR:
      return {
        ...state,
        button: true,
      };
    default:
      return state;
  }
};

export default inprogressReducer;
