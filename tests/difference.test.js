const difference = require('../difference');

test('subtracts 4 - 3 to equal 1', () => {
    expect(difference(4,3)).toBe(1);
});