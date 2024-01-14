let numberArray = [];
let number1 = 1;
let number2 = 5;
let operator = "+";
let solution = 6;
const displayInput = document.querySelector('#inputDisplay');
const displaySolution = document.querySelector('#solutionDisplay');
const numberSelection = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
const operatorSelection = document.querySelector('#operator');
displayInput.textContent = number1 + operator + number2;
displaySolution.textContent = solution;

/// still needs to be fixed; for loop working, 
///but doesnt´return the number1
// define first number of calculation
function selectFirstNumber(){
    for(let i = 0; i < numberSelection.length; i++){
        numberSelection[i].addEventListener('click', () => {
            numberArray.push(numberSelection[i].textContent);
            number1 = parseInt(numberArray.join(""));
        });  
    }; 
};
/////////////////////////

//define number2 -like number 1 (if it´s then working)- but only if operator is not ""

//add eventlistner for each operator and update the operator


//calculation functions
// round solution to 2 decimal 
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
   

    //add a message if try to divide with 0
};

console.log(divide(2,0), solution)
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
//add eventlistener to equal sign and call operate function

//add AC function to start fresh without any number set 

