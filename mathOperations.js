// Math Operations
const sum = require('./sum');
const difference = require('./difference');
const product = require('./product');
const quotient = require('./quotient');
const power = require('./power');
const root = require('./root');

class mathOperations{
    static sum(a,b){
        return sum(a,b);
    }
    static difference(a,b){
        return difference(a,b);
    }
    static product(a,b){
        return product(a,b);
    }
    static quotient(a,b){
        return quotient(a,b);
    }
    static power(a,b){
        return power(a,b);
    }
    static root(a){
        return root(a);
    }
}

module.exports = mathOperations;