import { CAROUSEL_INDEX } from '../actions/actionCarousel';

const INITIAL_STATE = {
  indexInitial: 0,
  indexLast: 1,
};

const reducerCarousel = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAROUSEL_INDEX:
      return {
        indexInitial: action.indexInitial,
        indexLast: action.indexLast,
      };
    default:
      return state;
  }
};

export default reducerCarousel;
