import { DONE_FILTER } from '../actions/DoneRecipe';

const INITAL_STATE = {
  DoneShow: 'ALL',
};
const DoneRecipe = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case DONE_FILTER:
      return {
        ...state,
        DoneShow: action.donevalue,
      };
    default:
      return state;
  }
};

export default DoneRecipe;
