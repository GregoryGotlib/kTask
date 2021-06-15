import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  app: userReducer,
});

export default rootReducer;
