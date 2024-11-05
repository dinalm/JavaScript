"use strict";

const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
const num3 = Number(prompt("Enter the third number:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (sum / 3).toFixed(2);

document.querySelector('#output').innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average}</p>
`;
