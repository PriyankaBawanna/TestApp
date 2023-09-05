import Button from "@app/commonComp/Button";
import { allRoutes } from "@app/constant/path";
import React from "react";
import { createTestSession } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TestName } from "@app/instruction/testName";
import { getCurrentTestSession } from "@app/instruction/selectors";
const Instruction = () => {
  const dispatch = useDispatch();

  const { noOfQuestion, time } = useSelector(
    (state: any) => state.questionsReducer.questionDetails
  );

  const navigate = useNavigate();
  const handleStartTest = () => {
    let testName = TestName(noOfQuestion);
    const sessionId = dispatch(createTestSession(testName));
    console.log("Session ID:", sessionId);
    navigate(allRoutes.testPage);
  };

  return (
    <>
      Instructions
      <div>Number of Questions {noOfQuestion}</div>
      <div>Time :{time}</div>
      <Button onClick={handleStartTest} label={"Start Test"} />
    </>
  );
};
export default Instruction;
