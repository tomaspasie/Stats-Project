const calculator = require('../calculator');
let calc = new calculator;

test('The calculator adds 3 + 4 to equal 7', () => {
    expect(calc.sum(3,4)).toBe(7);
});

test('The calculator adds [2,2,2] to equal 6', () => {
    expect(calc.sum([2,2,2])).toBe(6);
});

test('The calculator subtracts 4 - 3 to equal 1', () => {
    expect(calc.difference(4,3)).toBe(1);
});

test('The calculator multiplies 3 * 4 to equal 12', () => {
    expect(calc.product(3,4)).toBe(12);
});

test('The calculator divides 12 / 4 to equal 3', () => {
    expect(calc.quotient(12,4)).toBe(3);
});

test('The calculator returns 3 to the power of 4 to equal 81', () => {
    expect(calc.power(3,4)).toBe(81);
});

test('The calculator returns square root 144 to equal 12', () => {
    expect(calc.root(144)).toBe(12);
});