"use strict";

const numberOfRolls = Number(prompt("Enter the number of dice rolls:"));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}
document.querySelector('#output').innerHTML = `<p>The sum of ${numberOfRolls} dice rolls is: ${sum}</p>`;
