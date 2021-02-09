import { INCREMENT, DECREMENT, SET_COUNTER, SET_STEPS } from "../ActionTypes";

const initialState = {};

export const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      console.log(state.counter + payload);
      return {
        ...state,
        counter: state.counter + parseInt(payload) || 1,
      };
    case DECREMENT:
      return { ...state, counter: state.counter - payload };
    case SET_COUNTER:
      return { ...state, counter: parseInt(payload) || 0 };
    case SET_STEPS:
      return { ...state, steps: { step: parseInt(payload) || 1 } };
    default:
      return state;
  }
};
