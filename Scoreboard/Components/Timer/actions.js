import { ADD_COUNTER, SUB_COUNTER, ZERO_COUNTER} from "./types";

function addCounter() {
  return {
    type: ADD_COUNTER
  };
}

function subCounter() {
  return {
    type: SUB_COUNTER
  };
}

function zeroCounter() {
  return {
    type: ZERO_COUNTER
  };
}

const actionCreators = {
  addCounter,
  subCounter,
  zeroCounter
};

export { actionCreators };