// Node.js version
console.log("Hello World from Node");

// Array ES6 functions
const numbers = [1, 2, 3, 4, 5];
console.log("Doubled:", numbers.map(n => n * 2));
console.log("Even:", numbers.filter(n => n % 2 === 0));
console.log("Sum:", numbers.reduce((a, b) => a + b, 0));

// Recursion
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
console.log("Factorial of 5:", factorial(5));

// Lodash library
const _ = require('lodash'); // Load the lodash library
const arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", _.sortBy(arr));
