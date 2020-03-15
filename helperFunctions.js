class helperFunctions{
    stringCheck(value){
        if (typeof value == 'string'){
            throw "Error: Value cannot be a string."
        } else{
            return value;
        }
    }
    
    emptyArrayCheck(value){
        if (Array.isArray(value) == false){
            throw "Error: Value is not an array."
        } else{
            if(value.length == 0){
                throw "Error: Array is empty."
            } else{
                return value;
            }
        }
    }
}

module.exports = helperFunctions;