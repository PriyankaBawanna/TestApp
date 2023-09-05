import { QUESTIONS_NO_OF } from "@app/redux/constant";

export const getNoOfQuestions = ({ ...questionDetails }) => {
  console.log("Action is called for get no of questions", questionDetails);
  return {
    type: QUESTIONS_NO_OF,
    questionDetails,
  };
};
