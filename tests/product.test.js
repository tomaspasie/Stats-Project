const product = require('../product');

test('multiplies 3 * 4 to equal 12', () => {
    expect(product(3,4)).toBe(12);
});