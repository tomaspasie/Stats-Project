const quotient = require('../quotient');

test('divides 12 / 4 to equal 3', () => {
    expect(quotient(12,4)).toBe(3);
});