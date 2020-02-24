const sum = require('../sum');

test('adds 3 + 4 to equal 7', () => {
    expect(sum(3,4)).toBe(7);
});

test('adds [2,2,2] to equal 6', () => {
    expect(sum([2,2,2])).toBe(6);
});