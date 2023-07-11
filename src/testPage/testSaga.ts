import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_QUESTIONS_REQUEST,
  SUBMIT_RESPONSE_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  getQuestions,
} from "@app/redux/constant";
import {
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  submitResponseSuccess,
  submitResponseFailure,
} from "@app/testPage/actionTest";
import { fetchQuestionsAPI } from "@app/services/http";

function* fetchQuestions(action) {
  try {
    const { noOfQuestions } = action.payload;
    console.log("No of Question In saga", noOfQuestions);

    // Make the API request to fetch questions
    const response = yield call(fetchQuestionsAPI, getQuestions, noOfQuestions);
    console.log("API Reponse", response.data);

    // Dispatch success action with the retrieved questions
    yield put(fetchQuestionsSuccess(response.data));
  } catch (error) {
    // Dispatch failure action if there's an error
    yield put({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
}

function* submitResponse(action) {
  try {
    const response = yield call(
      axios.post,
      "/api/submit-response",
      action.payload
    ); // Replace with your API endpoint
    yield put(submitResponseSuccess());
    // Handle response or perform any other actions
  } catch (error) {
    yield put(submitResponseFailure(error.message));
  }
}

function* watchFetchQuestions() {
  yield takeEvery(FETCH_QUESTIONS_REQUEST, fetchQuestions);
}

function* watchSubmitResponse() {
  yield takeEvery(SUBMIT_RESPONSE_REQUEST, submitResponse);
}

export default function* rootSaga() {
  yield watchFetchQuestions();
  yield watchSubmitResponse();
}
