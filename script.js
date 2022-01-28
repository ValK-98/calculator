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
  return (displayValue = ""), (storedValue = ""), (operation = undefined);
}

function del() {
  displayValue = displayValue.toString().slice(0, -1);
}

function append(number) {
  if (number === "." && displayValue.includes(".")) return;
  displayValue = displayValue + number;
  updateDisplay();
}

function updateDisplay() {
  currentNumberText.innerText = displayValue;
  if (operation != undefined) {
    previousNumberText.innerText = `${storedValue} ${operation}`;
  } else {
    previousNumberText.innerText = '';
  }
}

function operationChoice(operation) {
  if (displayValue === '') return;
  if (storedValue !== '') {
    operate();
  }
  operation = operation;
  storedValue = displayValue;
  displayValue = "";
}

function operate() {
  let total = 0;
  switch (operation) {
    case "+":
      total = displayValue + storedValue;
      break;
    case "-":
      {
        total = displayValue - storedValue;
      }
      break;
    case "x":
      {
        total = displayValue * storedValue;
      }
      break;
    case "÷":
      {
        total = displayValue / storedValue;
      }
      break;
    default:
      return;
  }
  displayValue = total;
  operation = undefined;
  storedValue = "";
}

acButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

delButton.addEventListener("click", () => {
  del();
  updateDisplay();
});

equalButton.addEventListener("click", () => {
  operate();
  updateDisplay();
});

numberButtons.forEach((num) =>
  num.addEventListener("click", () => {
    append(num.innerText);
    updateDisplay();
  })
);

operatorButtons.forEach((operator) =>
  operator.addEventListener("click", () => {
    operationChoice(operator.innerText);
    updateDisplay();
  })
);
