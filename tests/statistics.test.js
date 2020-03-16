const calculator = require('../statistics');
const generate = require('../Generator');
let calc = new calculator;
let generator = new generate;

// Statistics Functions

test('Mean', () => {
    expect(generator.randomSeed(0, 10, 'seed')).toBe(5.661807692527293); // Change Values to Numbers From Random Generator
});

/*

test('Median', () => {
    expect().toBe();
});

test('Mode', () => {
    expect().toBe();
});

test('Variance', () => {
    expect().toBe();
});

test('Standard Deviation', () => {
    expect().toBe();
});

test('Quartiles', () => {
    expect().toBe();
});

test('Skewness', () => {
    expect().toBe();
});

test('Sample Correlation', () => {
    expect().toBe();
});

test('Population Correlation', () => {
    expect().toBe();
});

test('Z-Score', () => {
    expect().toBe();
});

test('Mean Deviation', () => {
    expect().toBe();
});

*/

// Population Sampling Functions

/*
test('Simple Random Sampling', () => {
    expect().toBe();
});

test('Simple Systematic Sampling', () => {
    expect().toBe();
});

test('Sample Confidence Interval', () => {
    expect().toBe();
});

test('Margin of Error', () => {
    expect().toBe();
});

test('Population Confidence Interval', () => {
    expect().toBe();
});

test('Cochran’s Sample Size', () => {
    expect().toBe();
});

test('Sample Size (Unknown Population Standard Deviation)', () => {
    expect().toBe();
});

test('Sample Size (Known Population Standard Deviation)', () => {
    expect().toBe();
});

*/