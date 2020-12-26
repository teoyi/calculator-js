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
    if (b == 0) {
        return "Undefined";
    } else {
    return a / b
    }
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
        return divide(a,b);
    };
};

const result = document.querySelector('#result');
const equation = document.querySelector('#equation');
const ops = document.querySelectorAll('.op')
const digits = document.querySelectorAll('.digit');

let eqn = '';
let output = 0;

// Button Click Functionality 
digits.forEach(digit => {
    digit.addEventListener('click', function(){
        eqn += digit.textContent;
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML = eqn;
        // console.log(eqn);
        return eqn;
    });
});

ops.forEach(op => {
    op.addEventListener('click', function(){
        eqn += op.textContent;
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML = eqn;
        // console.log(eqn);
        return eqn;
    });
});

// Backspace Functionality
const del = document.querySelector("#delete");
del.addEventListener('click', function(){
    eqn = eqn.slice(0, -1);
    if (!eqn) {
        document.getElementById('equation').innerHTML = '---';
        console.log('Returned to empty string')
    } else {
        document.getElementById('equation').innerHTML = eqn;
        console.log('Popped!')
    };
})

// Clear all Functionality 
const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    document.getElementById('equation').innerHTML = '---';
    document.getElementById('result').innerHTML = '0';
    eqn = '';
    output = 0;
    console.log('Cleared All')
})

