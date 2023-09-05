import {
  SUBMIT_RESPONSE_REQUEST,
  UPDATE_USER_RESPONSE,
  saveUserResponseURL,
} from "@app/redux/constant";
import { takeEvery, put, call } from "redux-saga/effects";

import { saveUserResponse, updateUserResponse } from "@app/services/http";

function* submitResponse(action: object) {
  console.log("@APP", action);
  try {
    const saveRespons = yield saveUserResponse(saveUserResponseURL, action);
    console.log("SAve", saveRespons);
  } catch {
    alert("error");
  }
}
function* updateResponse(action: object) {
  try {
    yield updateUserResponse(action);
  } catch {}
}

function* submitUserResponse() {
  yield takeEvery(SUBMIT_RESPONSE_REQUEST, submitResponse);
  yield takeEvery(UPDATE_USER_RESPONSE, updateResponse);
}
export default submitUserResponse;
