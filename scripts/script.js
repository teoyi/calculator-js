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
let displayNum = 0;
digits.forEach(digit => {
    digit.addEventListener('click', function(){
        eqn += digit.textContent;
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML += eqn;
        console.log(eqn);
        return eqn;
        
    });
});
ops.forEach(op => {
    op.addEventListener('click', function(){
        eqn += op.textContent;
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML += eqn;
        console.log(eqn);
        return eqn;
        
    });
});

