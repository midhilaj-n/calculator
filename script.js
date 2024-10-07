function add(num1, num2){
    const op1 = parseInt(num1);
    const op2 = parseInt(num2);
    return op1 + op2;
}

function subtract(num1, num2){
    const op1 = parseInt(num1);
    const op2 = parseInt(num2);
    return op1 - op2;
}


function multiply(num1, num2){
    const op1 = parseInt(num1);
    const op2 = parseInt(num2);
    return op1 * op2;
}


function divide(num1, num2){
    const op1 = parseInt(num1);
    const op2 = parseInt(num2);
    return op1 / op2;
}

console.log(add(5, 5))
console.log(subtract(10, 4));
console.log(multiply(5, 2));
console.log(divide(20, 5));