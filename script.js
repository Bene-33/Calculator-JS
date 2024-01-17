let numberArray1 = [];
let numberArray2 = [];
let number1 = "";
let numberSet = "unSet";
let number2 = "";
let operator = "";
let solution = "";
const displayInput = document.querySelector('#inputDisplay');
const displaySolution = document.querySelector('#solutionDisplay');
const numberButton = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
const divideButton = document.querySelector('#operatorDivide');
const timesButton = document.querySelector('#operatorTimes');
const substractButton = document.querySelector('#operatorSubstract');
const addButton = document.querySelector('#operatorAdd');
const acButton = document.querySelector('#acButton');

//reset everything and start with a fresh calculation
acButton.addEventListener('click', () => {
    number1 = "";
    number2 = "";
    operator = "";
    numberArray1 = [];
    numberArray2 = [];
    solution = "";
    displayInput.textContent = number1 + operator + number2;
    displaySolution.textContent = solution;
});

// define first number of calculation
////// deactivate function, after operator ist set to not call it when i want to set up number2
for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', () => {
        numberArray1.push(numberButton[i].textContent);
        number1 = parseInt(numberArray1.join(""));
        displayInput.textContent = number1 + operator + number2;
    });  
    numberArray1 = [];
};



//define number2 -like number 1 (if it´s then working)- but only if operator is not ""
for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', () => {
        numberArray2.push(numberButton[i].textContent);
        number2 = parseInt(numberArray2.join(""));
        displayInput.textContent = number1 + operator + number2;
    });  
    numberArray2 = [];
};



//update operator variable
divideButton.addEventListener('click', () => {
    operator = "/";
    displayInput.textContent = number1 + operator + number2;
});

timesButton.addEventListener('click', () => {
    operator = "*";
    displayInput.textContent = number1 + operator + number2;
});

substractButton.addEventListener('click', () => {
    operator = "-";
    displayInput.textContent = number1 + operator + number2;
});

addButton.addEventListener('click', () => {
    operator = "+";
    displayInput.textContent = number1 + operator + number2;
});

//calculation functions
function add(x, y) {
    solution = Math.round((parseFloat(x) + parseFloat(y))*100)/100;
    displaySolution.textContent = solution;
};

function substract(x, y) {
    solution = Math.round((parseFloat(x) - parseFloat(y))*100)/100;
    displaySolution.textContent = solution;
};

function multiply(x,y){
    solution = Math.round((parseFloat(x) * parseFloat(y))*100)/100;
    displaySolution.textContent = solution;
};

function divide(x,y){
    if(parseInt(y) === 0){
        displaySolution.textContent = "error"
        alert("you can not divide with '0'")
    }
    else{
        solution = Math.round((parseFloat(x) / parseFloat(y))*100)/100;
        displaySolution.textContent = solution;
    }
};

// make the calculation 
// if no number1 is set set number1 = 0 
// modifie function to check if solution is calculated, then use the solution instead use number1
//check to implement the call function if after [number operator number] another operator is used to first operate []
//then use solution + new operator keep doing till equal is pressed
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

calculate.addEventListener('click', () => {
    operate(number1, number2, operator)
});


