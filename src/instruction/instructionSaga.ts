// sagas.js

import { call, put, takeEvery } from "redux-saga/effects";
import { CREATE_TEST_SESSION } from "@app/redux/constant";

import { setCurrentTestSession } from "@app/instruction/action";
import { createTestSession } from "@app/services/http";
import { testSessionURL } from "@app/redux/constant";
function* createTestSessionSaga(action) {
  try {
    console.log("Session saga is called ");
    // Make an API call to create a test session
    const sessionId = yield createTestSession(testSessionURL, action.payload);

    // Dispatch an action to set the current test session
    yield put(setCurrentTestSession(sessionId));
  } catch (error) {
    // Handle error if the test session creation fails
  }
}

function* watchCreateTestSession() {
  yield takeEvery(CREATE_TEST_SESSION, createTestSessionSaga);
}

export default watchCreateTestSession;
