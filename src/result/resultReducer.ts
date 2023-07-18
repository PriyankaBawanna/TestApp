import {
  SHOW_RESULT_REQUEST,
  SHOW_RESULT_SUCCESS,
  SHOW_RESULT_FAILURE,
} from "@app/redux/constant";

const initialState = {
  resultData: null,
  isLoading: false,
  error: null,
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESULT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SHOW_RESULT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resultData: action.payload,
      };
    case SHOW_RESULT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
