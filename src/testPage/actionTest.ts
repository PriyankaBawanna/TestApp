import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SUBMIT_RESPONSE_REQUEST,
  SUBMIT_RESPONSE_SUCCESS,
  SUBMIT_RESPONSE_FAILURE,
  INCREMENT_QUESTION_INDEX,
  DECREMENT_QUESTION_INDEX,
  SET_CURRENT_QUESTION_INDEX,
} from "@app/redux/constant";
export const fetchQuestionsRequest = (noOfQuestions: number) => {
  console.log(" action Fetch Question Request is called", noOfQuestions);
  return {
    type: FETCH_QUESTIONS_REQUEST,
    payload: noOfQuestions,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  console.log("  action Fetch Question Sucess", questions);
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestionsFailure = (error) => {
  console.log("  action Fetch Question Fail");
  return {
    type: FETCH_QUESTIONS_FAILURE,
    payload: error,
  };
};

export const submitResponseRequest = (response: Object) => {
  console.log("@action Submit Response action ", response);
  return {
    type: SUBMIT_RESPONSE_REQUEST,
    payload: response,
  };
};

export const submitResponseSuccess = () => {
  console.log("  action Submit Response sucess");
  return {
    type: SUBMIT_RESPONSE_SUCCESS,
  };
};
export const submitResponseFailure = (error) => {
  return {
    type: SUBMIT_RESPONSE_FAILURE,
    payload: error,
  };
};

export const setCurrentQuestionIndex = (index) => {
  return {
    type: SET_CURRENT_QUESTION_INDEX,
    payload: index,
  };
};
