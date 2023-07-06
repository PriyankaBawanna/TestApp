import { REGISTER_NEW_USER } from "@app/redux/constant";
import { takeEvery } from "redux-saga/effects";
import { getRegisterRequest } from "@app/services/http";
import { registerAPI } from "@app/redux/constant";
function* registerUser({ ...userData }) {
  //receive  userData from  registerUserRequest
  const body = {
    name: userData.userData.name,
    email: userData.userData.email,
    mobile: userData.userData.mobile,
    password: userData.userData.password,
  };

  try {
    const response = yield getRegisterRequest(registerAPI, body);
  } catch {
    alert("Error");
  }
}

function* registerUserSaga() {
  yield takeEvery(REGISTER_NEW_USER, registerUser);
}
export default registerUserSaga;
