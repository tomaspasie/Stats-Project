// Division
function quotient(a,b){
    if(b==0){
        throw "Error: Denominator cannot be 0.";
    } else{
        return a/b;
    }
}

module.exports = quotient;
