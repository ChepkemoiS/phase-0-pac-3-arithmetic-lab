1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
// index.js

// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract the second number from the first
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide the first number by the second (assuming non-zero divisor)
function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero";
  }
}

// Example usage:
console.log(add(5, 3));       // Output: 8
console.log(subtract(7, 2));  // Output: 5
console.log(multiply(4, 6));  // Output: 24
console.log(divide(10, 2));   // Output: 5
console.log(divide(8, 0));    // Output: Cannot divide by zero
let number = 5;

number++; //=> 5... hmmmm

number; //=> 6 -- the number was incremented after it was evaluated

number--; //=> 6

number; //=> 5
//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5
parseInt("nonsense!", 10);
