document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    display.textContent = currentInput;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '0';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.textContent = currentInput;
            } else if (value === '=') {
                if (operator && firstOperand !== '' && currentInput !== '') {
                    secondOperand = currentInput;
                    try {
                        currentInput = eval(`${firstOperand}${operator}${secondOperand}`).toString();
                    } catch (e) {
                        currentInput = 'Error';
                    }
                    display.textContent = currentInput;
                    operator = '';
                    firstOperand = '';
                    secondOperand = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }
        });
    });
});
