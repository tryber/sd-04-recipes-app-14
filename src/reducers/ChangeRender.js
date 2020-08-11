import { CHANGE_RENDER } from '../actions/actionChangeRender';

const INITIAL_STATE = {
  render: true,
};

const ChangeRender = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_RENDER:
      return {
        ...state,
        render: action.bool,
      };
    default:
      return state;
  }
};

export default ChangeRender;
