// Index
const statistics = require('./statistics');
let stats = new statistics;

console.log('The Mean is ' + stats.Mean([10,20,30,40]));
console.log('The Median is ' + stats.Median([1,2,3,4,5,6]));
//console.log('The Mode is ' + stats.Mode([1,2,3,3,5]));
console.log('The Variance is ' + stats.Variance([1,2,3,4,5,6,7,8,9,10]));
console.log('The Standard Deviation is ' + stats.standardDev([1,2,3,4,5,6,7,8,9,10]));
console.log('The Quartiles are: ' + stats.Quartiles([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log('The Skewness is ' + stats.Skewness([54,64,85,68,94,21,10,5,79]));