let screen = document.getElementById('screen');
let operator = '', x ='', y = '';

// when a number is clicked, put it on screen
const number = document.querySelectorAll('.numbers');
number.forEach(button => {
    button.addEventListener('click', () => {
        screen.innerHTML += button.innerHTML;
    })
})

// when decimal is clicked, put it on screen
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    screen.innerHTML += decimal.innerHTML;
})

// operations
let operations = {
    addition: (a, b) => { return a + b;},
    subtraction: (a, b) => { return a - b;},
    multiplication: (a, b) => { return a * b;},
    division: (a, b) => {return a / b;}
}

const operators = document.querySelectorAll('.operators');
operators.forEach(button => {
    button.addEventListener('click', () => {
        // save the number that was clicked into x
        x = Number(screen.innerHTML);
        // after clicking an operation clear screen
        screen.innerHTML = '';
        // save the operator that was clicked
        operator = button.innerHTML;
    })
})

// do the operations when equals button is clicked
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    y = Number(screen.innerHTML);
    if (operator === '+') {
        screen.innerHTML = operations.addition(x, y);
    } else if (operator === '-'){
        screen.innerHTML = operations.subtraction(x, y);
    } else if (operator === '*'){
        screen.innerHTML = operations.multiplication(x, y);
    } else if (operator === '/'){
        screen.innerHTML = operations.division(x, y);
    }
    x = y;
})

// clear the entire screen button
const allClear = document.getElementById('allClear');
allClear.addEventListener('click', () => {
    operator = '', x ='', y = '', screen.innerHTML = '';
})

// backspace button
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    let array = screen.innerHTML.split('');
    array.splice((array.length-1), 1);
    screen.innerHTML = array.join('');
})
