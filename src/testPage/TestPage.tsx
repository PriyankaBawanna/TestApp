import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestionsRequest,
  submitResponseRequest,
  updateResponse,
} from "@app/testPage/actionTest";
import RadioButton from "@app/commonComp/RadioButton";
import { TestName } from "@app/instruction/testName";
import { useNavigate } from "react-router-dom";
import { allRoutes } from "@app/constant/path";
import Timer from "@app/timer/Timer";
import Calculator from "@app/calculator/Calculator";

const TestPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previousResponseCheck, setPreviousResponseCheck] = useState(false);

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

  useEffect(() => {
    const storedResponses = localStorage.getItem("userResponses");
    if (storedResponses) {
      setUserResponses(JSON.parse(storedResponses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userResponses", JSON.stringify(userResponses));
  }, [userResponses]);

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
    setPreviousResponseCheck(true);
    const response = event.target.value;

    setUserResponse(response);
    const userResponseObj = {
      sessionId: currentTestSession.sessionId,
      user_id: details._id,
      QuestionId: currentQuestion._id,
      testName: testName,
      userAnswer: response,
      startTime: currentTestSession.startTime,
    };

    const existingResponse = userResponses[currentQuestionIndex];
    if (existingResponse) {
      dispatch(updateResponse(userResponseObj));
    } else {
      dispatch(submitResponseRequest(userResponseObj));
    }

    // Maintain Data state for current Data and Previous Data
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = response;
      return updatedResponses;
    });
  };

  const handleGenerateResult = () => {
    alert("Are You want Submit test");
    navigate(allRoutes.result);
  };

  return (
    <>
      Test Page
      <Timer />
      <Calculator />
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
      ;
    </>
  );
};

export default TestPage;
