const displayInput = document.querySelector('#inputDisplay');
const displaySolution = document.querySelector('#solutionDisplay');
const numberButton = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
const divideButton = document.querySelector('#operatorDivide');
const timesButton = document.querySelector('#operatorTimes');
const substractButton = document.querySelector('#operatorSubstract');
const addButton = document.querySelector('#operatorAdd');
const acButton = document.querySelector('#acButton');
let numberArray1 = [];
let numberArray2 = [];
let number1 = "";
let number2 = "";
let operator = "";
let solution = "";

function updateDisplay(){
    displayInput.textContent = number1 + operator + number2;
    displaySolution.textContent = solution
}

//reset everything and start with a fresh calculation
acButton.addEventListener('click', () => {
    number1 = "";
    number2 = "";
    operator = "";
    numberArray1 = [];
    numberArray2 = [];
    solution = "";
    updateDisplay();
});

// define first number of the calculation
for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', () => {
        if(operator === ""){
            numberArray1.push(numberButton[i].textContent);
            number1 = parseInt(numberArray1.join(""));
            updateDisplay();
        };    
    });
};

// define second number of the calculation
for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', () => {
        if(operator !== ""){
            numberArray2.push(numberButton[i].textContent);
            number2 = parseInt(numberArray2.join(""));
            updateDisplay();
        };
    });  
};


//update operator variable
divideButton.addEventListener('click', () => {
    operator = "/";
    updateDisplay();
});

timesButton.addEventListener('click', () => {
    operator = "*";
    updateDisplay();
});

substractButton.addEventListener('click', () => {
    operator = "-";
    updateDisplay();
});

addButton.addEventListener('click', () => {
    operator = "+";
    updateDisplay();
});

//calculation functions
function add(x, y) {
    solution = Math.round((parseFloat(x) + parseFloat(y))*100)/100;
    updateDisplay();
};

function substract(x, y) {
    solution = Math.round((parseFloat(x) - parseFloat(y))*100)/100;
    updateDisplay();
};

function multiply(x,y){
    solution = Math.round((parseFloat(x) * parseFloat(y))*100)/100;
    updateDisplay();
};

function divide(x,y){
    if(parseInt(y) === 0){
        displaySolution.textContent = "error"
        alert("you can not divide with '0'")
    }
    else{
        solution = Math.round((parseFloat(x) / parseFloat(y))*100)/100;
        updateDisplay();
    }
};

// make the calculation 
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
    if(number1 === ""){
        number1 = 0;
    }
    operate(number1, number2, operator)
});


