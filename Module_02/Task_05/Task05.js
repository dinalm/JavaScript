"use strict";

const numbers = [];

while (true) {
    const input = Number(prompt("Enter a number:"));
    if (numbers.includes(input)) {
        console.log(`The number ${input} has already been given.`);
        break;
    }
    numbers.push(input);
}
numbers.sort((a, b) => a - b);

console.log("All given numbers in ascending order:");
for (const number of numbers) {
    console.log(number);
}
