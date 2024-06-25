function calculator() {
  const display = document.querySelector(".display");
  const numberButtons = document.querySelectorAll(".number-button");
  const operatorButtons = document.querySelectorAll(".operator");
  const equals = document.querySelector(".equals");
  const decimal = document.querySelector(".decimal");
  const allClear = document.querySelector(".all-clear");
  const plusMinus = document.querySelector(".plus-minus");
  const percentage = document.querySelector(".percentage");
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";
  let lastInputOperator = false;

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const number = button.textContent;
      inputNumber(number);
    });
  });

  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
      if (lastInputOperator) {
        operator = operatorButton.textContent;
        display.textContent = operatorButton.textContent;
      } else {
        firstNumber = display.textContent;
        operator = operatorButton.textContent;
        display.textContent = operator;
        lastInputOperator = true;
        secondNumber = "";
      }
    });
  });

  allClear.addEventListener("click", () => {
    display.textContent = "";
    numberButtons.forEach((button) => {
      button.disabled = false;
    });
    operatorButtons.forEach((button) => (button.disabled = false));
  });

  const inputNumber = (number) => {
    const screenNumber = display.textContent;

    if (lastInputOperator) {
      display.textContent = "";
      lastInputOperator = false;
    }

    if (screenNumber === "") {
      display.textContent = number;
      firstNumber = number;
    } else {
      if (screenNumber.length <= 10) {
        display.textContent += number;
        secondNumber = display.textContent;
      }
    }
  };

  const calculate = (firstNumber, operator, secondNumber) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
      default:
        throw new Error("Invalid operator: " + operator);
    }
  };

  equals.addEventListener("click", () => {
    secondNumber = display.textContent;
    if (firstNumber && secondNumber) {
      console.log(`First Number: ${firstNumber}`);
      console.log(`Second Number: ${secondNumber}`);
      console.log(`Operator: ${operator}`);
      const result = calculate(firstNumber, operator, secondNumber);
      console.log(`Result: ${result}`);
      display.textContent = result.toString();
      firstNumber = "";
      operator = "";
      secondNumber = "";
      lastInputOperator = false;
    }
    // Prevent further input after equals button is clicked
    if (display.textContent !== "") {
      numberButtons.forEach((button) => {
        button.disabled = true;
        button.style.backgroundColor = "white";
        button.style.color = "black";
      });
      operatorButtons.forEach((button) => {
        button.disabled = true;
        button.style.backgroundColor = "#9368b7";
        button.style.color = "black";
      });
    }
  });
}

calculator();
