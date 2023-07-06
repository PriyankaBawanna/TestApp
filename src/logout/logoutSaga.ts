import { takeEvery, put } from "redux-saga/effects";

import { LOGOUT_SUCCESS, LOGOUT_USER } from "@app/redux/constant";
import Cookies from "js-cookie";
function* logoutSaga() {
  Cookies.remove("token");
  // Dispatch the logout success action
  yield put({ type: LOGOUT_SUCCESS });
}

// Watcher saga
function* authSaga() {
  yield takeEvery(LOGOUT_USER, logoutSaga);
}

export default authSaga;
