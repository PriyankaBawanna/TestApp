import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  SUBMIT_RESPONSE_SUCCESS,
  SUBMIT_RESPONSE_FAILURE,
  FETCH_QUESTIONS_REQUEST,
  SUBMIT_RESPONSE_REQUEST,
  INCREMENT_QUESTION_INDEX,
  DECREMENT_QUESTION_INDEX,
  SET_CURRENT_QUESTION_INDEX,
} from "@app/redux/constant";
// reducers.js

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  userResponse: "",
  isResponseCorrect: null,
  isLoading: false,
  error: null,
};

export const testPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      console.log("Question Request Reducer  is called ");
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_QUESTIONS_SUCCESS:
      console.log("Question success Reducer is Called");
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SUBMIT_RESPONSE_SUCCESS:
      return {
        ...state,
        isResponseCorrect: true,
      };

    case SUBMIT_RESPONSE_REQUEST:
      console.log("@Submit Reducer");
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SUBMIT_RESPONSE_FAILURE:
      return {
        ...state,
        isResponseCorrect: false,
        error: action.payload,
      };

    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    default:
      return state;
  }
};
