"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
const rolls = [];

let result;
do {
    result = rollDice();
    rolls.push(result);
} while (result !== 6);

let listItems = "";
for (const roll of rolls) {
    listItems += `<li>${roll}</li>`;
}
document.querySelector('#output').innerHTML = `<ul>${listItems}</ul>`;
