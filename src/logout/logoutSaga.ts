import { takeEvery, put } from "redux-saga/effects";

import { LOGIN_FAIL, LOGOUT_USER } from "@app/redux/constant";
import Cookies from "js-cookie";
function* logoutSaga() {
  console.log("Remove token ");
  Cookies.remove("token");
  // Dispatch the logout success action
  yield put({ type: LOGIN_FAIL });
}

// Watcher saga
function* authSaga() {
  yield takeEvery(LOGOUT_USER, logoutSaga);
}

export default authSaga;
