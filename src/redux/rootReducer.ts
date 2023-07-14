import { combineReducers } from "redux";
import { registerNewUser } from "@app/register/reducerRegister";
import { loginUserReducer } from "@app/login/reducerLogin";
import { getUserDetailsReducer } from "@app/home/homeReducer";
import { questionsReducer } from "@app/freeTest/reducer";
import { testPageReducer } from "@app/testPage/reducerTest";
import { instructionReducer } from "@app/instruction/reducerInstruction";
export default combineReducers({
  registerNewUser,
  loginUserReducer,
  getUserDetailsReducer,
  questionsReducer,
  testPageReducer,
  instructionReducer,
});
