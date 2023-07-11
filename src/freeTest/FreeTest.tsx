import Button from "@app/commonComp/Button";
import { allRoutes } from "@app/constant/path";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNoOfQuestions } from "@app/freeTest/action";
const FreeTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noOfQuestion = [10, 20, 30, 40];

  const handleStartTest = (item: any) => {
    const questionDetails = {
      noOfQuestion: item,
      time: item * 1.5,
    };

    dispatch(getNoOfQuestions(questionDetails));
    navigate(allRoutes.instruction);
  };
  return (
    <>
      <h1>Welcome to Free Test Series</h1>
      {noOfQuestion.map((item) => {
        return (
          <div className="free-test" key={item}>
            <div className="cart-test-details">
              <h5>No Of Question {item}</h5>

              <p>Time: {item * 1.5} Minutes</p>

              <button
                onClick={() => {
                  handleStartTest(item);
                }}
              >
                Start Test
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FreeTest;
