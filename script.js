let numberArray = [];
let number1 = 1;
let number2 = 2;
let operator = "+";
let solution = 6;
let math;
const displayInput = document.querySelector('#inputDisplay');
const displaySolution = document.querySelector('#solutionDisplay');
const numberButton = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
const divideButton = document.querySelector('#operatorDivide');
const timesButton = document.querySelector('#operatorTimes');
const substractButton = document.querySelector('#operatorSubstract');
const addButton = document.querySelector('#operatorAdd');

displayInput.textContent = number1 + operator + number2;
displaySolution.textContent = solution;

/// still needs to be fixed; for loop working, 
///but doesnt´return the number1
// define first number of calculation
function selectFirstNumber(){
    for(let i = 0; i < numberButton.length; i++){
        numberButton[i].addEventListener('click', () => {
            numberArray.push(numberButton[i].textContent);
            number1 = parseInt(numberArray.join(""));
        });  
    }; 
};
/////////////////////////

//define number2 -like number 1 (if it´s then working)- but only if operator is not ""

//update operator variable
divideButton.onclick = () => operator = "/";
timesButton.onclick = () => operator = "*";
substractButton.onclick = () => operator = "-";
addButton.onclick = () => operator = "+";



//calculation functions
function add(x, y) {
    solution = Math.round((parseFloat(x) + parseFloat(y))*100)/100;
};

function substract(x, y) {
    solution = Math.round((parseFloat(x) - parseFloat(y))*100)/100;
};

function multiply(x,y){
    solution = Math.round((parseFloat(x) * parseFloat(y))*100)/100;
};

function divide(x,y){
    if(y === 0){
        solution = "error, you should not divide with '0'"
    }
    else{
        solution = Math.round((parseFloat(x) / parseFloat(y))*100)/100;
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
    operate(number1, number2, operator)
});


//add AC function to start fresh without any number set 

