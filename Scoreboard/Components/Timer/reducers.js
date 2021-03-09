import { ADD_COUNTER, SUB_COUNTER, ZERO_COUNTER } from "./types";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ZERO_COUNTER:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default reducer;