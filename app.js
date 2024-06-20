const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const allClear = document.querySelector(".all-clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percentage");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    inputNumber(number);
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    display.textContent = operator.textContent;
  });
});

allClear.addEventListener("click", () => {
  if (display !== "") display.textContent = "";
});

const inputNumber = (number) => {
  const screenNumber = display.innerHTML;
  if (screenNumber.length <= 10) {
    display.innerHTML += number;
  }
};

const operate = (operator) => {
  if (operator === "/") {
  }
};
