import { QUESTIONS_NO_OF } from "@app/redux/constant";
const initialState = {
  questionDetails: {},
};
export const questionsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case QUESTIONS_NO_OF:
      return {
        ...state,
        questionDetails: action.questionDetails,
      };
    default:
      return state;
  }
};
