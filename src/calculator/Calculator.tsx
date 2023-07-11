import React, { useState } from "react";

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  //calculator State
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? digit : prevValue + digit
      );
    }
  };

  const handleDecimalClick = () => {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setWaitingForSecondOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue((prevValue) => prevValue + ".");
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(selectedOperator);
  };

  const performCalculation = () => {
    const firstValue = parseFloat(firstOperand);
    const secondValue = parseFloat(displayValue);

    if (operator === "+") {
      return firstValue + secondValue;
    } else if (operator === "-") {
      return firstValue - secondValue;
    } else if (operator === "*") {
      return firstValue * secondValue;
    } else if (operator === "/") {
      return firstValue / secondValue;
    }

    return secondValue;
  };

  const handleEqualClick = () => {
    const result = performCalculation();
    setDisplayValue(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Calculator</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <div>
              <div className="calculator">
                <h1></h1>
                <div className="display">{displayValue}</div>
                <div className="keypad">
                  <button onClick={() => handleDigitClick("7")}>7</button>
                  <button onClick={() => handleDigitClick("8")}>8</button>
                  <button onClick={() => handleDigitClick("9")}>9</button>
                  <button onClick={() => handleOperatorClick("+")}>+</button>
                  <button onClick={() => handleDigitClick("4")}>4</button>
                  <button onClick={() => handleDigitClick("5")}>5</button>
                  <button onClick={() => handleDigitClick("6")}>6</button>
                  <button onClick={() => handleOperatorClick("-")}>-</button>
                  <button onClick={() => handleDigitClick("1")}>1</button>
                  <button onClick={() => handleDigitClick("2")}>2</button>
                  <button onClick={() => handleDigitClick("3")}>3</button>
                  <button onClick={() => handleOperatorClick("*")}>*</button>
                  <button onClick={() => handleDigitClick("0")}>0</button>
                  <button onClick={handleDecimalClick}>.</button>
                  <button onClick={handleEqualClick}>=</button>
                  <button onClick={() => handleOperatorClick("/")}>/</button>
                  <button onClick={handleClearClick}>C</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
