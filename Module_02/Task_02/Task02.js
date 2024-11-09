"use strict";

const numParticipants = Number(prompt("Enter the number of participants:"));
const participants = [];

for (let i = 0; i < numParticipants; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}
participants.sort();
let listItems = "";
for (const name of participants) {
    listItems += `<li>${name}</li>`;
}
document.querySelector('#output').innerHTML = `<ol>${listItems}</ol>`;
