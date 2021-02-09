import { getUsersApi } from "../../services/api";
import { UPDATE_USERS, UPDATE_USER_ERROR, IS_LOADING } from "../ActionTypes";
export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING });
      const response = await getUsersApi();
      dispatch({ type: UPDATE_USERS, payload: response });
    } catch (e) {
      console.log(e);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: e,
      });
    }
  };
};
