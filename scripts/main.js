/* Operator functions */
var input = 1425;
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

/* Number Buttons */
var display = document.getElementById("display");

var zeroButton = document.getElementById("num-0");
var zeroButtonClicked = function() {
  input = input.toString();
  input = input.split("");
  input.push("0");
  input = input.join("");
  input = parseInt(input);
  display.textContent = input;
}

zeroButton.addEventListener("click", zeroButtonClicked);

/* Operator buttons */
//operator function
//display result
//input is reset to []

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
