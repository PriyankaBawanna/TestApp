import {
  SUBMIT_RESPONSE_REQUEST,
  saveUserResponseURL,
} from "@app/redux/constant";
import { takeEvery, put, call } from "redux-saga/effects";

import { saveUserResponse } from "@app/services/http";

function* submitResponse(action: object) {
  console.log("@APP", action);
  try {
    const saveRespons = yield saveUserResponse(saveUserResponseURL, action);
  } catch {
    alert("error");
  }
}

function* submitUserResponse() {
  yield takeEvery(SUBMIT_RESPONSE_REQUEST, submitResponse);
}
export default submitUserResponse;
