import {
  SUBMIT_RESPONSE_SUCCESS,
  SUBMIT_RESPONSE_FAILURE,
  SUBMIT_RESPONSE_REQUEST,
  UPDATE_USER_RESPONSE,
} from "@app/redux/constant";
const initialState = {
  userResponses: [],
  isLoading: false,
  error: null,
};

export const submitResponseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBMIT_RESPONSE_REQUEST:
      return {
        ...state,
        userResponses: [...state.userResponses, action.payload],
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

    case UPDATE_USER_RESPONSE:
      console.log("@Update Reducer", action.payload);
      // Update the userResponses array based on the payload
      const updatedUserResponses = state.userResponses.map((response) => {
        if (response.QuestionId === action.payload.QuestionId) {
          return action.payload;
        }
        return response;
      });

      return {
        ...state,
        userResponses: updatedUserResponses,
      };

    default:
      return state;
  }
};
