"use strict";

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
const sides = Number(prompt("Enter the number of sides on the dice:"));
const rolls = [];
let result;
do {
    result = rollDice(sides);
    rolls.push(result);
} while (result !== sides);

let listItems = "";
for (const roll of rolls) {
    listItems += `<li>${roll}</li>`;
}
document.querySelector('#output').innerHTML = `<ul>${listItems}</ul>`;
