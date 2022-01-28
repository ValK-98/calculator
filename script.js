let firstNum = "";
let secondNum = "";
let currentOperator = "";
let storedNum = "";
document.getElementById("current-num").innerHTML = `${firstNum}`;
document.getElementById("previous-num").innerHTML = `${storedNum}`;

//look into data numbers for HTML
//look into text content for HTML to create loop for number input

const nums = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const division = document.getElementById("division");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const multiplier = document.getElementById("multiplier");

nums.forEach((num) =>
  num.addEventListener("click", () => numInput(num.textContent))
);

operators.forEach((operator) =>
  operator.addEventListener("click", () => operatorInput(operator.textContent))
);



function operatorInput(operator) {
  return currentOperator+=operator, displayNum();
}

function numInput(num) {
  return firstNum += num, displayNum();
}


function displayNum() {
  document.getElementById("current-num").innerHTML = `${firstNum}`;
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
