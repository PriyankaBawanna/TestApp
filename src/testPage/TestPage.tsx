import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestionsRequest,
  submitResponseRequest,
} from "@app/testPage/actionTest";
import RadioButton from "@app/commonComp/RadioButton";
import { TestName } from "@app/instruction/testName";

const TestPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const [userResponse, setUserResponse] = useState("");
  const [userResponses, setUserResponses] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const userDetail = useSelector((state: any) => state.getUserDetailsReducer);
  const [details, setDetails] = useState(userDetail.user);

  const { noOfQuestion } = useSelector(
    (state: any) => state.questionsReducer.questionDetails
  );

  const testName = TestName(noOfQuestion);

  const currentTestSession = useSelector(
    (state: any) => state.instructionReducer.currentTestSession
  );

  const { questions } = useSelector((state: any) => state.testPageReducer);
  const currentQuestion = questions[currentQuestionIndex];

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

  const handleUserResponse = (event: any) => {
    const response = event.target.value;

    setUserResponse(response);
    const userResponseObj = {
      sessionId: currentTestSession.sessionId,
      user_id: details._id,
      QuestionId: currentQuestion._id,
      testName: testName,
      userAnswer: userResponse,
      startTime: currentTestSession.startTime,
    };
    dispatch(submitResponseRequest(userResponseObj));

    //maintain Data state current Data and Previous Data
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = response;
      return updatedResponses;
    });
  };
  const handleGenerateResult = () => {
    //after  complete test Result will be generated her
  };

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
            <button onClick={handleGenerateResult}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};
export default TestPage;
