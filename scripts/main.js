/* Operator functions */
var input = "";
var inputString = "";
var result= 0;

var clear = function() {
  result = 0;
}

var add = function() {
  result += input;
}

var substract = function() {
  result -= input;
}

var multiply = function() {
  result *= input;
}

var divide = function() {
  result = result / input;
}

//input = parseInt(input);
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
//operator function
//display result
//input is reset to []

var plusButton = document.getElementById("plus-operator");
var plusButtonClicked = function() {
  input = parseInt(input);
  result = parseInt(result);
  result += input;
  display.textContent = result;
  input = "";
};
plusButton.addEventListener("click", plusButtonClicked);

var minusButton = document.getElementById("minus-operator");
var minusButtonClicked = function() {
  input = parseInt(input);
  result = parseInt(result);
  result -= input;
  display.textContent = result;
  input = "";
};
minusButton.addEventListener("click", minusButtonClicked);

var multiplyButton = document.getElementById("multiply-operator");
var multiplyButtonClicked = function() {
  input = parseInt(input);
  if(result === 0){result = 1;};
  result *= input;
  display.textContent = result;
  input = "";
};
multiplyButton.addEventListener("click", multiplyButtonClicked);
//if equals is clicked
//result is displayed
//result is set back to 0
//input is reset to []

//if delete is clicked
//input converted to array
//last value is popped off
//input converted back to number

/* Display */
//when number button is clicked
//display input
//when operator button is clicked
//display result


/* Keyboard input */
//When key is pressed, corresponding button is clicked
