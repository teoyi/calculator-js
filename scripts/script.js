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
    if (operator === '+'){
        return add(a,b);
    } else if (operator === '-'){
        return minus(a,b);
    } else if (operator === '*'){
        return multiply(a,b);
    } else if (operator === '/'){
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
    });
});

ops.forEach(op => {
    op.addEventListener('click', function(){
        if (op.textContent === '÷'){
            eqn += '/';
        } else if (op.textContent === '×'){
            eqn += '*';
        } else if (op.textContent === '+' || op.textContent === '-'){
            eqn += op.textContent;
        };
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML = eqn;
        return eqn;
    });
});

// Backspace Functionality
const del = document.querySelector("#delete");
del.addEventListener('click', function(){
    eqn = eqn.slice(0, -1);
    if (!eqn) {
        document.getElementById('equation').innerHTML = '---';
        console.log('Returned to empty string');
        return eqn;
    } else {
        document.getElementById('equation').innerHTML = eqn;
        console.log('Popped!');
        return eqn;
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
});

// Evaluate Equation Line 
const evaluate = document.querySelector('#equal')
evaluate.addEventListener('click', function(){
    let prio_op = ['*', '/', '+', '-'];
    eqn = eqn.split(/([+,--,*,/])/);
    console.log(eqn);

    for (operandN = 0; operandN < prio_op.length; operandN++){
        console.log(prio_op[operandN]);
        for (i = 0; i < eqn.length; i++){
            if (eqn === prio_op[operandN]) {
                console.log(eqn);
                output = operate(prio_op[operandN], parseFloat(eqn[i-1]), parseFloat(eqn[i+1])).toString();
                eqn[i] = output;
                eqn.splice(i-1, 1);
                eqn.splice(i, 1);
                console.log(eqn);
            };
        };
    };
    document.getElementById('result').innerHTML = eqn;
});


// function locate(eqn) {
//     let operand = ['+', '-', '*', '/'];
//     let tempArr = [];
//     for (i = 0; i < eqn.length; i++){
//         if (operand.includes(eqn[i])) {
//             tempArr.push([eqn[i], i]);
//         };
//     };
//     return tempArr;
// };


let num = '10*12+7-5*3/5';
let bum = '1+3+6'

num = num.split(/([+,--,*,/])/);
console.log(num);
console.log('top is original')
prio_op = ['*', '/', '+', '-'];


for (operandN = 0; operandN < prio_op.length; operandN++){
    console.log(prio_op[operandN]);
    for (i = 0; i < num.length; i++){
        if (num[i] === prio_op[operandN]){
            output = operate(prio_op[operandN], parseFloat(num[i-1]), parseFloat(num[i+1])).toString();
            num[i] = output;
            num.splice(i-1, 1);
            num.splice(i, 1);
            console.log(num);
        };
    };
};


