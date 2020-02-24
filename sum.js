// Addition
function sum(a,b = null){
    var arraySum = 0;
    if (Array.isArray(a)){
        for (num in a){
            arraySum+=a[num];
        }
        return arraySum;
    }
    return a+b;
}

module.exports = sum;