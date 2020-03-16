const calculator = require('../statistics');
const generate = require('../Generator');
var jStat = require('jStat');
let calc = new calculator;
let generator = new generate;

// Statistics Functions

test('Mean', () => {
    expect(calc.Mean(generator.randomNumberList(10, 1, 10, 'test'))).toBe(jStat.mean(generator.randomNumberList(10, 1, 10, 'test')));
});

test('Median', () => {
    expect(calc.Median([1,2,3,4,5,6])).toBe(jStat.median([1,2,3,4,5,6]));
});

test('Mode', () => {
    expect(calc.Mode([1,2,3,3,3,4,5])).toBe("3");
});

test('Variance', () => {
    expect(calc.Variance(generator.randomNumberList(10, 1, 10, 'test'))).toBe(jStat.variance(generator.randomNumberList(10, 1, 10, 'test')));
});

test('Standard Deviation', () => {
    expect(calc.standardDev(generator.randomNumberList(10, 1, 10, 'test'))).toBe(jStat.stdev(generator.randomNumberList(10, 1, 10, 'test')));
});


test('Quartiles', () => {
    expect(calc.Quartiles([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toBe("Lower Quartile (Q1): 4 | Middle Quartile (Q2): 8 | Upper Quartile (Q3): 12");
});

test('Skewness', () => {
    expect(calc.Skewness(generator.randomNumberList(10, 1, 10, 'test'))).toBe(jStat.skewness(generator.randomNumberList(10, 1, 10, 'test')));
});

test('Sample Correlation', () => {
    expect(calc.sampleCorrelation([15,37,59,78,91],[6,21,48,67,88])).toBe(1.2407801867935795);
});

test('Population Correlation', () => {
    expect(calc.populationCorrelation([15,37,59,78,91],[6,21,48,67,88])).toBe(0.9926241494348637);
});

test('Z-Score', () => {
    expect(calc.zScore(generator.randomNumberList(10, 1, 10, 'test'), generator.selectSameValue(generator.randomNumberList(10, 1, 10, 'test'),'seed'))).toBe(jStat.zscore(generator.selectSameValue(generator.randomNumberList(10, 1, 10, 'test'),'seed'),generator.randomNumberList(10, 1, 10, 'test')));
});

test('Mean Deviation', () => {
    expect(calc.meanDeviation(generator.randomNumberList(10, 1, 10, 'test'))).toBe(jStat.meandev(generator.randomNumberList(10, 1, 10, 'test')));
});


// Population Sampling Functions

test('Simple Systematic Sampling', () => {
    expect(calc.systematicSampling([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toBe("2,4,6,8,10");
});

test('Sample Confidence Interval', () => {
    expect(calc.confidenceInterval([15,37,59,78,91,6,21,48,67,88])).toBe("32.9893169479889 ± 69.0106830520111");
});

test('Cochran’s Sample Size', () => {
    expect(calc.cochransFormula([15,37,59,78,91,6,21,48,67,88],5)).toBe(3.5714285714285716);
});

test('Sample Size (Unknown Population Standard Deviation)', () => {
    expect(calc.unknownPopStDev(.50)).toBe(1068);
});

test('Sample Size (Known Population Standard Deviation)', () => {
    expect(calc.knownPopStDev(2.5)).toBe(97);
});