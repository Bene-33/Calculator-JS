let numberArray = [];
let number1 = 1;
let number2 = 5;
let operator = "+";
let solution = 6;
const displayInput = document.querySelector('#inputDisplay');
const  displaySolution = document.querySelector('#solutionDisplay');
const numberSelection = document.querySelectorAll('.number');
const calculate = document.querySelector('#equal');
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

function setOperator(){
    //add eventlistner for each operator and update the operator

};


//calculation functions
//instead of return update the global solution variable
// round solution to 2 decimal 
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

    //add a message if try to divide with 0
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
//add eventlistener to equal sign and call operate function

//add AC function to start fresh without any number set 

