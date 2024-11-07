"use strict";

const numDice = Number(prompt("Enter the number of dice:"));
const targetSum = Number(prompt("Enter the target sum of dice:"));

const numSimulations = 10000;
let successfulRolls = 0;

for (let i = 0; i < numSimulations; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === targetSum) {
        successfulRolls++;
    }
}
const probability = (successfulRolls / numSimulations) * 100;
document.querySelector('#output').innerHTML = `<p>Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%</p>`;

