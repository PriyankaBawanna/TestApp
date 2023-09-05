import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_REQUEST,
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

    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    default:
      return state;
  }
};
