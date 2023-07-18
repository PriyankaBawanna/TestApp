import {
  SHOW_RESULT_REQUEST,
  SHOW_RESULT_SUCCESS,
  SHOW_RESULT_FAILURE,
} from "@app/redux/constant";

export const showResultRequest = (sessionID: any) => {
  console.log("Show Result Action called ", sessionID);
  return {
    type: SHOW_RESULT_REQUEST,
    payload: sessionID,
  };
};

export const showResultSuccess = (resultData) => {
  return {
    type: SHOW_RESULT_SUCCESS,
    payload: resultData,
  };
};

export const showResultFailure = (error) => {
  return {
    type: SHOW_RESULT_FAILURE,
    payload: error,
  };
};
