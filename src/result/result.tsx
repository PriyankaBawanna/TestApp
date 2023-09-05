import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showResultRequest } from "@app/result/resultAction";
import { useNavigate } from "react-router-dom";
import { allRoutes } from "@app/constant/path";

const Result = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resultData, setResultData] = useState({});

  const { sessionId } = useSelector(
    (state: any) => state.instructionReducer.currentTestSession
  );

  const userResult = useSelector(
    (state: any) => state.resultReducer.resultData
  );

  useEffect(() => {
    if (userResult) {
      localStorage.setItem("userResult", JSON.stringify(userResult));
    }
  }, [userResult]);

  useEffect(() => {
    const storedResultData = localStorage.getItem("userResult");

    if (storedResultData) {
      setResultData(JSON.parse(storedResultData));
      console.log("Storage", resultData);
    } else {
      dispatch(showResultRequest(sessionId));
    }
  }, [dispatch, sessionId]);
  useEffect(() => {
    dispatch(showResultRequest(sessionId));
  }, []);

  const handleClearLogData = () => {
    localStorage.removeItem("userResult");
    localStorage.removeItem("userResponses");
    localStorage.removeItem("timerStartTime");
  };

  useEffect(() => {
    console.log("UseEffect called ");
    window.addEventListener("popstate", function (event) {
      //  when the back button is pressed
      navigate(allRoutes.home);
      handleClearLogData();
    });
  }, []);

  return (
    <>
      Result
      {}
      <div>question: {resultData.totalQuestions}</div>
      <div>correct ans: {resultData.correctCount}</div>
      <div>Percentage: {resultData.percentage}</div>
      <button onClick={handleClearLogData}>Ok</button>
    </>
  );
};
export default Result;
