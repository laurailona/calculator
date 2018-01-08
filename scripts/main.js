/* Operator functions */
var input = "";
var inputString = "";
var result= 0;

var multiply = function(num1, num2) {
  result = num1 * num2;
};

var divide = function(num1, num2) {
  result = num1 / num2;
};

var add = function(num1, num2) {
  result = num1 + num2;
};

var substract = function(num1, num2) {
  result = num1 - num2;
};

/* Number Buttons */
var display = document.getElementById("display");
var displayInput = function() {
  input = input.toString();
  input = input.split("");
  input.push(inputString);
  input = input.join("");
  display.textContent = input;
};

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
  inputArray.push(parseInt(input));
  inputArray.push(operator);
  input = "";
  operator = "";
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
  //evaluate inputArray

  //return result
};

equalsButton.addEventListener("click", finalCalculation);

var clearButton = document.getElementById("clear");
var clear = function() {
  input = "";
  inputArray = [];
  display.textContent = input;
};
clearButton.addEventListener("click", clear);
/* Keyboard input */
//When key is pressed, corresponding button is clicked
