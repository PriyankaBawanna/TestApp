import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Timer = () => {
  const { time } = useSelector(
    (state: any) => state.questionsReducer.questionDetails
  );

  const [startTime, setStartTime] = useState(() => {
    const storedTime = localStorage.getItem("timerStartTime");
    return storedTime ? parseInt(storedTime) : Date.now();
  });
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem("timerStartTime", startTime.toString());

    const timerInterval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime]);

  const remainingTime = time * 60 * 1000 - (currentTime - startTime);
  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  useEffect(() => {
    if (remainingTime <= 0) {
      //if timer ends the Navigate to Result Page
    }
  }, [remainingTime]);

  return (
    <div>
      <h1>Timer</h1>
      <p>
        Remaining Time: {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
