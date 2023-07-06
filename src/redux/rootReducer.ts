import { combineReducers } from "redux";
import { registerNewUser } from "@app/register/reducerRegister";
import { loginUserReducer } from "@app/login/reducerLogin";
import { getUserDetailsReducer } from "@app/home/homeReducer";
export default combineReducers({
  registerNewUser,
  loginUserReducer,
  getUserDetailsReducer,
});
