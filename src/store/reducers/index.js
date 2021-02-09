import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { counterReducer } from "./counterReducer";
import { usersReducer } from "./usersReducer";
export const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
  users: usersReducer,
});
