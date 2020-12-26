// Basic Arithmetic Functions 
function add(a, b){
    return a + b;
};

function minus(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b
}

// Operation Function 

function operate(operator, a, b){
    if (operator === 'add'){
        return add(a,b);
    } else if (operator === 'minus'){
        return minus(a,b);
    } else if (operator === 'multiply'){
        return multiply(a,b);
    } else if (operator === 'divide'){
        if (b == 0){
            return Nan;
        } else {
            return divide(a,b);
        }
    };
};
