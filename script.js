let numberArray = [];
let number1 = 1;
let number2 = 5;
let operator = "+";
let solution = 0;
const displayInput = document.querySelector('#inputDisplay');
const  displaySolution = document.querySelector('#solutionDisplay');
const numberSelection = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
displayInput.textContent = number1 + operator + number2;
displaySolution.textContent = solution;

/// still needs to be fixed; for loop working, 
///but doesnt´return the number1
// define first number of calculation
for(let i = 0; i < numberSelection.length; i++){
    numberSelection[i].addEventListener('click', () => {
        numberArray.push(numberSelection[i].textContent);
        number1 = parseInt(numberArray.join(""));
               
    });  
};
/////////////////////////



//calculation functions
function add(x, y) {
    return parseFloat(x) + parseFloat(y);
};

function substract(x, y) {
    return parseFloat(x) - parseFloat(y);
};

function multiply(x,y){
    return parseFloat(x) * parseFloat(y);
};

function divide(x,y){
    return parseFloat(x) / parseFloat(y);
};

// make the calculation 
function operate(num1, num2, operator) {
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
