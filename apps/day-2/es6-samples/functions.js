// function statement syntax - es5
// function sum(a, b) {
//   return a + b;
// }

// function expression syntax - es5
// var sum = function (a, b) {
//   return a + b;
// };

// 1. arrow function syntax - es6
// var sum = (a, b) => {
//   return a + b;
// };

// 2. arrow function syntax - es6
var sum = (a, b) => a + b;

// 3. arrow function syntax - es6
var square = x => x * x;

// 4. arrow function syntax - es6
var greet = () => console.log('hi arrow function');

const result = sum(10, 30);
console.log('result:', result);
console.log('square:', square(5));
greet();

