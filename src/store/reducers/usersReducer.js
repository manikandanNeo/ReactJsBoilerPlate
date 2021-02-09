import { UPDATE_USER_ERROR, UPDATE_USERS, IS_LOADING } from "../ActionTypes";

const initialState = { data: [], error: null, isLoading: false };
export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_LOADING:
      return { ...state, data: null, error: null, isLoading: true };
    case UPDATE_USERS:
      return { ...state, data: payload.data, error: null, isLoading: false };
    case UPDATE_USER_ERROR:
      return { ...state, data: null, error: payload, isLoading: false };
    default:
      return state;
  }
};
