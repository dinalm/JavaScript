"use strict";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const resultDisplay = document.getElementById("result");
const calculateButton = document.getElementById("start");

calculateButton.addEventListener("click", () => {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    let result;

    switch (operation.value) {
        case "add":
            result = number1 + number2;
            break;
        case "sub":
            result = number1 - number2;
            break;
        case "multi":
            result = number1 * number2;
            break;
        case "div":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }
    resultDisplay.textContent = `Result: ${result}`;
});
