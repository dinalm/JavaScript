"use strict";

const calculationInput = document.getElementById("calculation");
const resultDisplay = document.getElementById("result");
const calculateButton = document.getElementById("start");

calculateButton.addEventListener("click", () => {
    const input = calculationInput.value;
    let result;

    if (input.includes("+")) {
        const [num1, num2] = input.split("+").map(Number);
        result = num1 + num2;
    } else if (input.includes("-")) {
        const [num1, num2] = input.split("-").map(Number);
        result = num1 - num2;
    } else if (input.includes("*")) {
        const [num1, num2] = input.split("*").map(Number);
        result = num1 * num2;
    } else if (input.includes("/")) {
        const [num1, num2] = input.split("/").map(Number);
        if (num2 !== 0) {
            result = Math.floor(num1 / num2);
        } else {
            result = "Error: Division by zero";
        }
    } else {
        result = "Invalid operation";
    }
    resultDisplay.textContent = `Result: ${result}`;
});
