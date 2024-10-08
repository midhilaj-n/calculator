let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return null;
    }
  }

const display = document.getElementById('display');
let displayValue = '';

function updateDisplay(value) {
  displayValue += value;
  display.innerText = displayValue;
}

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.textContent);
  });
});


document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
      firstNumber = displayValue;
      operator = button.textContent;
      displayValue = '';  // reset display for next number
    });
  });

  document.getElementById('equals').addEventListener('click', () => {
    secondNumber = displayValue;
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.innerText = result;
    displayValue = result.toString();  // Store result for potential next operation
  });

  document.getElementById('clear').addEventListener('click', () => {
    displayValue = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.innerText = '0';  // Reset display
  });
  
  document.getElementById('decimal').addEventListener('click', () => {
    if (!displayValue.includes('.')) {
      updateDisplay('.');
    }
  });

  document.getElementById('backspace').addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.innerText = displayValue || '0';
  });

  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key)) updateDisplay(key);  // Handle number keys
    if (key === '+') operator = '+';  // Handle operators
    // Add cases for other keys (Enter for equals, etc.)
  });
  
  
  
  


























function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error: Dividing by 0!";
    }
    return a / b;
  }
  