let displayValue = "";
let storedValue = "";
let operation = undefined;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-del]");
const equalButton = document.querySelector("[data-equal]");
const previousNumberText = document.querySelector("[data-previous-number]");
const currentNumberText = document.querySelector("[data-current-number]");

numberButtons.forEach((num) =>
  num.addEventListener("click", () => numInput(num.textContent))
);

operatorButtons.forEach((operator) =>
  operator.addEventListener("click", () => operatorInput(operator.textContent))
);



function operatorInput(operator) {
  return currentOperator+=operator, displayNum();
}

function numInput(num) {
  return displayValue += num, displayNum();
}


function displayNum() {
  document.getElementById("current-num").innerHTML = `${displayValue}`;
  document.getElementById("previous-num").innerHTML = `${storedNum}`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, c) {
  if (c === "+") return add(a, b);
  else if (c === "-") return subtract(a, b);
  else if (c === "*") return multiply(a, b);
  else return divide(a, b);
}
