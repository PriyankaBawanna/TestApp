import Button from "@app/commonComp/Button";
import { allRoutes } from "@app/constant/path";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Instruction = () => {
  const { noOfQuestion, time } = useSelector(
    (state: any) => state.questionsReducer.questionDetails
  );
  const navigate = useNavigate();
  const handleStartTest = () => {
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
