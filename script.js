// Stretch goal - keyboard support! 


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
  previousNumberText.innerText = storedValue;
  if (operation != undefined) {
    previousNumberText.innerText = `${storedValue} ${operation}`;
  } else {
    previousNumberText.innerText = "";
  }
}

function operationChoice(operator) {
  if (displayValue === "") return;
  if (storedValue !== "") {
    operate();
  }
  operation = operator;
  storedValue = displayValue;
  displayValue = "";
  updateDisplay();
}

function operate() {
  let total = 0;
  let currentNum = Number(displayValue);
  let prevNum = Number(storedValue);
  switch (operation) {
    case "+":
      total = currentNum + prevNum;
      break;
    case "-":
      {
        total = prevNum - currentNum;
      }
      break;
    case "x":
      {
        total = currentNum * prevNum;
      }
      break;
    case "÷":
      {
        total = prevNum / currentNum;
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
