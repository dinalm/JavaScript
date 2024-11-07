"use strict";

const number = Number(prompt("Enter an integer:"));

let message;

if (number <= 1) {
    message = `${number} is not a prime number.`;
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        message = `${number} is a prime number.`;
    } else {
        message = `${number} is not a prime number.`;
    }
}
document.querySelector('#output').innerHTML = `<p>${message}</p>`;
