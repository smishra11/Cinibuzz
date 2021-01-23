import { ADD, SUBTRACT } from '../action/action';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + action.payload,
      };
    case SUBTRACT:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
