var input = "";
var inputString = "";
var result= 0;
var inputDisplay = "";

/* Number Buttons */
var display = document.getElementById("display");
var calculationDisplay = document.getElementById("calculation-display");
var displayInput = function() {
  input = input.toString();
  input = input.split("");
  input.push(inputString);
  input = input.join("");
  display.textContent = input;
};

var backspaceButton = document.getElementById("delete-button");
var backspaceButtonClicked = function() {
  input = input.split("");
  input.pop();
  input = input.join("");
  display.textContent = input;
};
backspaceButton.addEventListener("click", backspaceButtonClicked);

var pointButton = document.getElementById("point");
var pointButtonClicked = function() {
  inputString = ".";
  displayInput();
};
pointButton.addEventListener("click", pointButtonClicked);

var zeroButton = document.getElementById("num-0");
var zeroButtonClicked = function() {
  inputString = "0";
  displayInput();
};
zeroButton.addEventListener("click", zeroButtonClicked);

var oneButton = document.getElementById("num-1");
var oneButtonClicked = function() {
  inputString = "1";
  displayInput();
}
oneButton.addEventListener("click", oneButtonClicked);

var twoButton = document.getElementById("num-2");
var twoButtonClicked = function() {
  inputString = "2";
  displayInput();
}
twoButton.addEventListener("click", twoButtonClicked);

var threeButton = document.getElementById("num-3");
var threeButtonClicked = function() {
  inputString = "3";
  displayInput();
}
threeButton.addEventListener("click", threeButtonClicked);

var fourButton = document.getElementById("num-4");
var fourButtonClicked = function() {
  inputString = "4";
  displayInput();
}
fourButton.addEventListener("click", fourButtonClicked);

var fiveButton = document.getElementById("num-5");
var fiveButtonClicked = function() {
  inputString = "5";
  displayInput();
}
fiveButton.addEventListener("click", fiveButtonClicked);

var sixButton = document.getElementById("num-6");
var sixButtonClicked = function() {
  inputString = "6";
  displayInput();
}
sixButton.addEventListener("click", sixButtonClicked);

var sevenButton = document.getElementById("num-7");
var sevenButtonClicked = function() {
  inputString = "7";
  displayInput();
}
sevenButton.addEventListener("click", sevenButtonClicked);

var eightButton = document.getElementById("num-8");
var eightButtonClicked = function() {
  inputString = "8";
  displayInput();
}
eightButton.addEventListener("click", eightButtonClicked);

var nineButton = document.getElementById("num-9");
var nineButtonClicked = function() {
  inputString = "9";
  displayInput();
}
nineButton.addEventListener("click", nineButtonClicked);

/* Operator buttons */

//Operator buttons are NOT working correctly
//Input and operators should get stored in arrays
//Equal button should then loop through arrays and calculate result
var inputArray = [];
var operator = "";
var operate = function() {
  inputArray.push(parseFloat(input));
  inputArray.push(operator);
  input = "";
  operator = "";
  calculationDisplay.textContent = inputArray.join(""); 
};

var plusButton = document.getElementById("plus-operator");
var plusButtonClicked = function() {
  operator = "+";
  operate();
};
plusButton.addEventListener("click", plusButtonClicked);

var minusButton = document.getElementById("minus-operator");
var minusButtonClicked = function() {
  operator = "-";
  operate();
};
minusButton.addEventListener("click", minusButtonClicked);

var multiplyButton = document.getElementById("multiply-operator");
var multiplyButtonClicked = function() {
  operator = "*";
  operate();
};
multiplyButton.addEventListener("click", multiplyButtonClicked);

var divideButton = document.getElementById("divide-operator");
var divideButtonClicked = function() {
  operator = "/";
  operate();
};
divideButton.addEventListener("click", divideButtonClicked);

/* EQUALS BUTTON AND FINAL CALCULATION */
var equalsButton = document.getElementById("equals");
var finalCalculation = function() {
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
        tempResult = firstNumber / secondNumber;
        inputArray.splice(previousPosition, 3, tempResult);
        i = i -2;
        break;
        default:
        break;
      };
      };
  };
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
      };
    };
  };
  display.textContent = inputArray.toString();
  inputArray = [];
};

equalsButton.addEventListener("click", finalCalculation);

var clearButton = document.getElementById("clear");
var clear = function() {
  input = "";
  inputArray = [];
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
  };
  });
