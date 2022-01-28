const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-del]");
const equalButton = document.querySelector("[data-equal]");
const previousNumberText = document.querySelector("[data-previous-number]");
const currentNumberText = document.querySelector("[data-current-number]");

let displayValue = "";
let storedValue = "";
let operation = undefined;

function clear() {
  displayValue = "";
  storedValue = "";
  operation = undefined;
}

function append(number) {
  if (number === '.' && displayValue.includes('.')) return;
  displayValue = displayValue + number;
  updateDisplay();
}

function updateDisplay() {
  currentNumberText.innerText = displayValue;
}

numberButtons.forEach((num) =>
  num.addEventListener("click", () => {
    append(num.innerText);
    updateDisplay();
  })
);

operatorButtons.forEach((operator) =>
  operator.addEventListener("click", () => {
    
  })
);

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
