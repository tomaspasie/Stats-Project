// Index
const calculator = require('./mathOperations');

var x = calculator.sum(4,3);
var y = calculator.difference(4,3);
var z = calculator.product(4,3);

console.log('The sum of 4 and 3 is ' + x + '.');
console.log('The difference of 4 and 3 is ' + y + '.');
console.log('The product of 4 and 3 is ' + z + '.');