"use strict";

const shouldCalculate = confirm("Should I calculate the square root?");

const output = document.querySelector('#output');

if (shouldCalculate) {

    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        output.innerHTML = "<p>The square root of a negative number is not defined.</p>";
    } else {
        const squareRoot = Math.sqrt(number);
        output.innerHTML = `<p>The square root of ${number} is ${squareRoot}.</p>`;
    }
} else {
    output.innerHTML = "<p>The square root is not calculated.</p>";
}
