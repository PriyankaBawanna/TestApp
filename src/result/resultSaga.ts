import { takeLatest, put, call } from "redux-saga/effects";
import { SHOW_RESULT_REQUEST } from "@app/redux/constant";
import {
  showResultRequest,
  showResultSuccess,
  showResultFailure,
} from "@app/result/resultAction";
import { fetchResultData } from "@app/services/http"; // Assuming you have an API function to fetch the result data

function* showResultWorker(action) {
  try {
    const sessionID = action.payload;

    const resultData = yield call(fetchResultData, sessionID);

    yield put(showResultSuccess(resultData));
  } catch (error) {
    yield put(showResultFailure(error.message));
  }
}

function* resultSaga() {
  yield takeLatest(SHOW_RESULT_REQUEST, showResultWorker);
}

export default resultSaga;
