// Index
const calculator = require('./statistics');
let calc = new calculator;

console.log('----------------------------------------------------------------------------------------------');
console.log('Statistics Functions');
console.log('----------------------------------------------------------------------------------------------');
console.log('The Mean is ' + calc.Mean([10,20,30,40]));
console.log('The Median is ' + calc.Median([1,2,3,4,5,6]));
console.log('The Mode is ' + calc.Mode([1,2,3,3,3,4,4,4,5]));
console.log('The Variance is ' + calc.Variance([1,2,3,4,5,6,7,8,9,10]));
console.log('The Standard Deviation is ' + calc.standardDev([1,2,3,4,5,6,7,8,9,10]));
console.log('The Quartiles are: ' + calc.Quartiles([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log('The Skewness is ' + calc.Skewness([54,64,85,68,94,21,10,5,79]));
console.log('The Sample Correlation is ' + calc.sampleCorrelation([15,37,59,78,91],[6,21,48,67,88]));
console.log('The Population Correlation is ' + calc.populationCorrelation([15,37,59,78,91],[6,21,48,67,88]));
console.log('The Z-Score is ' + calc.zscore([15,37,59,78,91,6,21,48,67,88], 78));
console.log('The Mean Deviation is ' + calc.meanDeviation([15,37,59,78,91,6,21,48,67,88]));
console.log('----------------------------------------------------------------------------------------------');
console.log('Population Sampling Functions');
console.log('----------------------------------------------------------------------------------------------');
console.log('Simple Random Sampling: ' + calc.simpleRandomSampling([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log('Simple Systematic Sampling: ' + calc.systematicSampling([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log('Sample Confidence Interval: ' + calc.confidenceInterval([15,37,59,78,91,6,21,48,67,88]));
console.log('Margin of Error: ' + calc.marginOfError(calc.simpleRandomSampling([15,37,59,78,91,6,21,48,67,88], 5),[15,37,59,78,91,6,21,48,67,88]));
console.log('Population Confidence Interval: ' + calc.findConfidenceInterval(calc.simpleRandomSampling([15,37,59,78,91,6,21,48,67,88], 5),[15,37,59,78,91,6,21,48,67,88]));
