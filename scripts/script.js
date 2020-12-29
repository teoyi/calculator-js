// Operation Function 

function operate(operator, a, b){
    if (operator === '+'){
        return a + b;
    } else if (operator === '-'){
        return a - b;
    } else if (operator === '*'){
        return a * b;
    } else if (operator === '/'){
        if (b == 0) {
            return "Undefined";
        } else {
            return a / b;
        };
    };
};

// Modifying Eqn to a suitable array form for manipulation
// Output will be in the following: 
// Split the string at operator's position
// Replace values with a minus sign with the same negative value 
// Following that replace minus sign into a plus 
function modEqn(str){
    str = str.split(/([+,--,*,/])/);
    for (i = 0; i < str.length; i++){
        if (str[i-1] === '-') {
            str.splice(i, 1, '-' + str[i]);
            str.splice(i-1, 1, '+');
        };
    };
    return str;
};

// Apply Operate function that fulfills the conditions
function apply(eqnArr) {
    for (i = 0; i < eqnArr.length; i++){
        if (eqnArr[i] === prio_op[operandN]){
                output = operate(prio_op[operandN], parseFloat(eqnArr[i-1]), parseFloat(eqnArr[i+1])).toString();
                eqnArr[i] = output;
                eqnArr.splice(i-1, 1);
                eqnArr.splice(i, 1);
                // console.log(eqnArr);
        };
    };
};


const result = document.querySelector('#result');
const equation = document.querySelector('#equation');
const ops = document.querySelectorAll('.op')
const digits = document.querySelectorAll('.digit');

let prio_op = ['*', '/', '+', '-'];
let eqn = '';
let output = 0;

// Button Click Functionality 
digits.forEach(digit => {
    digit.addEventListener('click', function(){
        if (digit.textContent === 'ANS'){
            eqn += output;
        } else {
            eqn += digit.textContent;
        }
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML = eqn;
        del.disabled = false;
    });
});

ops.forEach(op => {
    op.addEventListener('click', function(){
        if (op.textContent === '÷'){
            eqn += '/';
        } else if (op.textContent === '×'){
            eqn += '*';
        } else if (op.textContent === '+'){
            eqn += op.textContent;
        } else if (op.textContent === '−'){
            eqn += op.textContent;
        }
        document.getElementById('equation').innerHTML = '';
        document.getElementById('equation').innerHTML = eqn;
        del.disabled = false;
        return eqn;
    });
});

// Backspace Functionality
const del = document.querySelector("#delete");
del.addEventListener('click', function(){
    eqn = eqn.slice(0, -1);
    if (!eqn) {
        document.getElementById('equation').innerHTML = '&nbsp;';
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
    document.getElementById('equation').innerHTML = '&nbsp;';
    document.getElementById('result').innerHTML = '0';
    del.disabled = false;
    eqn = '';
    output = 0;
    console.log('Cleared All')
});

// Evaluate Equation Line 
const evaluate = document.querySelector('#equal')
evaluate.addEventListener('click', function(){
    eqn = modEqn(eqn);
    while (eqn.length !== 1){
        for (operandN = 0; operandN < prio_op.length; operandN++){
            console.log(prio_op[operandN]);
            while (eqn.includes(prio_op[operandN])){
                apply(eqn);
            };
        };
    };
    output = eqn[0];
    document.getElementById('result').innerHTML = eqn;
    del.disabled = true;
    console.log(eqn);
    console.log(output);
});



