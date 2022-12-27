// program to check if number is even or odd
// take input from the user

var number = prompt("Enter a number: ");

// Ternary operator
const result = (number % 2 == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);