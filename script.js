let numEntry = "0";
let storedNum = "0";
document.getElementById("current-num").innerHTML = `${numEntry}`;
document.getElementById("previous-num").innerHTML = `${storedNum}`;


//look into data numbers for HTML 
//look into text content for HTML to create loop for number input

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const division = document.getElementById("division");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const multiplier = document.getElementById("multiplier");

zero.addEventListener("click", zeroAdd);

function zeroAdd() {
  numEntry += "0";
  displayNum();
}

function displayNum() {
  document.getElementById("current-num").innerHTML = `${numEntry}`;
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
