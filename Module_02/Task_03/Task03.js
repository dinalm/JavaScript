"use strict";

const dogNames = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(name);
}
dogNames.sort().reverse();
let listItems = "";
for (const name of dogNames) {
    listItems += `<li>${name}</li>`;
}
document.querySelector('#output').innerHTML = `<ul>${listItems}</ul>`;
