let display = document.getElementById("display");
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        if (isNaN(currentInput)) {
            throw new Error("Invalid input");
        }
        display.value = currentInput;
    } catch (error) {
        currentInput = '';
        display.value = "ERROR";
    }
}

function clear() {
    currentInput = '';
    display.value ='';
}
