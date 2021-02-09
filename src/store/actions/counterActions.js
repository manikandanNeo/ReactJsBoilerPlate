import { INCREMENT, DECREMENT, SET_COUNTER, SET_STEPS } from "../ActionTypes";

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

export const setCount = (payload) => {
  return { type: SET_COUNTER, payload };
};

export const setSteps = (payload) => {
  return { type: SET_STEPS, payload };
};
