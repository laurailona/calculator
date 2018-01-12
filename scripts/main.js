"use strict";
let input = "";
let inputString = "";

/* Number Buttons */
const display = document.getElementById("display");
const calculationDisplay = document.getElementById("calculation-display");
let displayInput = function() {
  input = input.toString();
  input = input.split("");
  input.push(inputString);
  input = input.join("");
  display.textContent = input;
};

const backspaceButton = document.getElementById("delete-button");
let backspaceButtonClicked = function() {
  if(input.charAt(input.length-1) == ".") { //allows decimal points again if decimal point gets deleted
    hasDecimalPoint = false;
  }
  input = input.split("");
  input.pop();
  input = input.join("");
  display.textContent = input;
};
backspaceButton.addEventListener("click", backspaceButtonClicked);

let hasDecimalPoint = false;
const pointButton = document.getElementById("point");
let pointButtonClicked = function() {
  if(hasDecimalPoint === false) {
    inputString = ".";
    displayInput();
  }
  hasDecimalPoint = true;
};
pointButton.addEventListener("click", pointButtonClicked);

const zeroButton = document.getElementById("num-0");
let zeroButtonClicked = function() {
  inputString = "0";
  displayInput();
};
zeroButton.addEventListener("click", zeroButtonClicked);

const oneButton = document.getElementById("num-1");
let oneButtonClicked = function() {
  inputString = "1";
  displayInput();
};
oneButton.addEventListener("click", oneButtonClicked);

const twoButton = document.getElementById("num-2");
let twoButtonClicked = function() {
  inputString = "2";
  displayInput();
};
twoButton.addEventListener("click", twoButtonClicked);

const threeButton = document.getElementById("num-3");
let threeButtonClicked = function() {
  inputString = "3";
  displayInput();
};
threeButton.addEventListener("click", threeButtonClicked);

const fourButton = document.getElementById("num-4");
let fourButtonClicked = function() {
  inputString = "4";
  displayInput();
};
fourButton.addEventListener("click", fourButtonClicked);

const fiveButton = document.getElementById("num-5");
let fiveButtonClicked = function() {
  inputString = "5";
  displayInput();
};
fiveButton.addEventListener("click", fiveButtonClicked);

const sixButton = document.getElementById("num-6");
let sixButtonClicked = function() {
  inputString = "6";
  displayInput();
};
sixButton.addEventListener("click", sixButtonClicked);

const sevenButton = document.getElementById("num-7");
let sevenButtonClicked = function() {
  inputString = "7";
  displayInput();
};
sevenButton.addEventListener("click", sevenButtonClicked);

const eightButton = document.getElementById("num-8");
let eightButtonClicked = function() {
  inputString = "8";
  displayInput();
};
eightButton.addEventListener("click", eightButtonClicked);

const nineButton = document.getElementById("num-9");
let nineButtonClicked = function() {
  inputString = "9";
  displayInput();
};
nineButton.addEventListener("click", nineButtonClicked);

/* Operator buttons */
let inputArray = [];
let operator = "";
let operate = function() {
  inputArray.push(parseFloat(input));
  inputArray.push(operator);
  input = "";
  operator = "";
  hasDecimalPoint = false;
  calculationDisplay.textContent = inputArray.join(""); 
};

const plusButton = document.getElementById("plus-operator");
let plusButtonClicked = function() {
  operator = "+";
  operate();
};
plusButton.addEventListener("click", plusButtonClicked);

const minusButton = document.getElementById("minus-operator");
let minusButtonClicked = function() {
  operator = "-";
  operate();
};
minusButton.addEventListener("click", minusButtonClicked);

const multiplyButton = document.getElementById("multiply-operator");
let multiplyButtonClicked = function() {
  operator = "*";
  operate();
};
multiplyButton.addEventListener("click", multiplyButtonClicked);

const divideButton = document.getElementById("divide-operator");
let divideButtonClicked = function() {
  operator = "/";
  operate();
};
divideButton.addEventListener("click", divideButtonClicked);

/* EQUALS BUTTON AND FINAL CALCULATION, CLEAR BUTTON */
const equalsButton = document.getElementById("equals");
let finalCalculation = function() {
  let divideByZero = false;
  inputArray.push(parseFloat(input));
  calculationDisplay.textContent = inputArray.join(""); 
  input = "";
  operator = "";
  for(let i=0;i < inputArray.length;i++) { //first round - multiply and divide only
    if(isNaN(inputArray[i])) { 
      let tempResult;
      let position = parseInt(i);
      let previousPosition = position - 1;
      let nextPosition = position + 1;
      let firstNumber = inputArray[previousPosition];
      let secondNumber = inputArray[nextPosition];
      switch(inputArray[i]) {
        case "*":
        tempResult = firstNumber * secondNumber;
        inputArray.splice(previousPosition, 3, tempResult);
        i = i -2;
        break;
        case "/":
          if(secondNumber === 0){
            divideByZero = true;
          }
          tempResult = firstNumber / secondNumber;
          inputArray.splice(previousPosition, 3, tempResult);
          i = i -2;
        break;
        default:
        break;
      }
      }
  }
  for(let i=0;i < inputArray.length;i++) { //second round - add and substract
    if(isNaN(inputArray[i])) {
      let tempResult;
      let position = parseInt(i);
      let previousPosition = position - 1;
      let nextPosition = position + 1;
      let firstNumber = inputArray[previousPosition];
      let secondNumber = inputArray[nextPosition];
      switch(inputArray[i]) {
        case "+":
        tempResult = firstNumber + secondNumber;
        inputArray.splice(previousPosition, 3, tempResult);
        i = i -2;
        break;
        case "-":
        tempResult = firstNumber - secondNumber;
        inputArray.splice(previousPosition, 3, tempResult);
        i = i -2;
        break;
      }
    }
  }
  display.textContent = inputArray.toString(); //the only number remaining in array is the result, which will be displayed as string
  if(divideByZero) {
    display.textContent = "ERROR: you can't divide by zero";
  }
  if(isNaN(inputArray[0])) {
    display.textContent = "ERROR: that makes no sense";
  }
  inputArray = [];
  divideByZero = false;
  hasDecimalPoint = false;
};

equalsButton.addEventListener("click", finalCalculation);

const clearButton = document.getElementById("clear");
let clear = function() {
  input = "";
  inputArray = [];
  hasDecimalPoint = false;
  display.textContent = input;
  calculationDisplay.textContent = inputArray.join(""); 
};
clearButton.addEventListener("click", clear);
/* ALLOW KEYBOARD INPUT */
window.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 48:
    case 96:
    zeroButtonClicked();
    break;
    case 49:
    case 97:
    oneButtonClicked();
    break;
    case 50:
    case 98:
      twoButtonClicked();
      break;
    case 51:
    case 99:
      threeButtonClicked();
      break;
    case 52:
    case 100:
      fourButtonClicked();
      break;
    case 53:
    case 101:
      fiveButtonClicked();
      break;
    case 54:
    case 102:
      sixButtonClicked();
      break;
    case 55:
    case 103:
      sevenButtonClicked();
      break;
    case 56:
    case 104:
      eightButtonClicked();
      break;
    case 57:
    case 105:
      nineButtonClicked();
      break;
    case 190:
    case 110:
      pointButtonClicked();
      break;
    case 8:
      backspaceButtonClicked();
      break;
    case 173:
    case 109:
    case 189:
      minusButtonClicked();
      break;
    case 107:
      plusButtonClicked();
      break;
    case 106:
      multiplyButtonClicked();
      break;
    case 111:
    case 191:
      event.preventDefault();
      divideButtonClicked();
      break;
    case 67:
      clear();
      break;
    case 13:
    case 61:
      finalCalculation();
      break;
    default:
      break;
  }
  });
