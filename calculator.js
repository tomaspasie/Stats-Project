// Calculator
const mathOperations = require('./mathOperations');

class calculator{
    sum(a,b){
        return this.Result = mathOperations.sum(a,b);
    }

    difference(a,b){
        return this.Result = mathOperations.difference(a,b);
    }

    product(a,b){
        return this.Result = mathOperations.product(a,b);
    }

    quotient(a,b){
        return this.Result = mathOperations.quotient(a,b);
    }

    power(a,b){
        return this.Result = mathOperations.power(a,b);
    }

    root(a){
        return this.Result = mathOperations.root(a);
    }

}

module.exports = calculator;