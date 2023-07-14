import { takeEvery, call, put } from "redux-saga/effects";

import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_FAILURE,
  getQuestions,
} from "@app/redux/constant";
import { fetchQuestionsSuccess } from "@app/testPage/actionTest";
import { fetchQuestionsAPI } from "@app/services/http";

function* fetchQuestions(action) {
  try {
    const { noOfQuestions } = action.payload;
    console.log("No of Question In saga", noOfQuestions);

    // Make the API request to fetch questions
    const response = yield call(fetchQuestionsAPI, getQuestions, noOfQuestions);

    // Dispatch success action with the retrieved questions
    yield put(fetchQuestionsSuccess(response.data));
  } catch (error) {
    // Dispatch failure action if there's an error
    yield put({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
}

function* watchFetchQuestions() {
  yield takeEvery(FETCH_QUESTIONS_REQUEST, fetchQuestions);
}

export default function* testSessionSaga() {
  yield watchFetchQuestions();
}
