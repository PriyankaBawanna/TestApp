import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestionsRequest } from "@app/testPage/actionTest";
import RadioButton from "@app/commonComp/RadioButton";
import Input from "@app/commonComp/Input";
const TestPage = () => {
  const dispatch = useDispatch();
  const [userResponse, setUserResponse] = useState("");
  const [userResponses, setUserResponses] = useState([]);
  const { noOfQuestion } = useSelector(
    (state: any) => state.questionsReducer.questionDetails
  );
  console.log("No Of Questions ", noOfQuestion);

  const { questions } = useSelector((state: any) => state.testPageReducer);
  console.log("Response", questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchQuestionsRequest(noOfQuestion));
  }, [dispatch]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleUserResponse = (event) => {
    const response = event.target.value;
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = response;
      return updatedResponses;
    });
  };
  const handleSaveResponse = () => {
    const response = userResponses[currentQuestionIndex];
    console.log("After Submission", currentQuestionIndex, response);

    // dispatch(saveUserResponse(currentQuestionIndex, userResponse));
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      Test Page
      <div>
        {currentQuestion && (
          <div>
            <h3>{currentQuestion.question}</h3>
            <ol>
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <RadioButton
                    id={`option-${index}`}
                    name="response"
                    value={option}
                    checked={userResponses[currentQuestionIndex] === option}
                    onChange={handleUserResponse}
                    label={option}
                    className={"ab"}
                  />
                </li>
              ))}
            </ol>
          </div>
        )}

        <div>
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSaveResponse}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};
export default TestPage;
