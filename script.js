let number1 = "";
let number2 = "";
let operator = "";
const displayInput = document.querySelector('#inputDisplay');
const numberSelection = document.querySelectorAll('.number');

// button generate number 
for(let i = 0; i < numberSelection.length; i++){
    numberSelection[i].addEventListener('click', () => {
        console.log(parseInt(numberSelection[i].textContent));
    })
};

let add = function(x, y) {
return parseFloat(x) + parseFloat(y);
};

let substract = function (x, y) {
    return parseFloat(x) - parseFloat(y);
};

let multiply = function(x,y){
    return parseFloat(x) * parseFloat(y);
};

let divide = function(x,y){
    return parseFloat(x) / parseFloat(y);
};

let operate = function(num1, num2, operator) {
    if (operator === '+' ) {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return substract(num1, num2);
    }
    else if (operator === '*' ) {
        return multiply(num1, num2);
    }
    else if (operator === '/' ) {
        return divide(num1, num2);
    }
    else {
        return "error"
    }
};