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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    inputNumber(number);
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstNumber = display.textContent;
    display.textContent = firstNumber + operator.textContent;
  });
});

allClear.addEventListener("click", () => {
  if (display !== "") display.textContent = "";
});

const inputNumber = (number) => {
  const screenNumber = display.textContent;
  if (screenNumber.length <= 10) {
    display.innerHTML += number;
  }
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
};

equals.addEventListener("click", () => {
  calculate();
});
