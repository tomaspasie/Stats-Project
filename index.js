// Index
const statistics = require('./statistics');
let stats = new statistics;

console.log('The Mean is ' + stats.Mean([10,20,30,40]));
console.log('The Median is ' + stats.Median([1,2,3,4,5]));
//console.log('The Mode is ' + stats.Mode([1,2,3,3,5]));
console.log('The Variance is ' + stats.Variance([1,2,3,4,5,6,7,8,9,10]));
console.log('The Standard Deviation is ' + stats.standardDev([1,2,3,4,5,6,7,8,9,10]));