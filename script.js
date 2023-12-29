let numbner1 = "";
let number2 = "";
let operator = "";

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
        add(num1, num2)
    }
    else if (operator === '-') {
        substract(num1, num2)
    }
    else if (operator === '*' ) {
        multiply(num1, num2)
    }
    else if (operator === '/' ) {
        divide(num1, num2)
    }
    else {
        return "error"
    }

};

console.log(operate(1,2,'+'))