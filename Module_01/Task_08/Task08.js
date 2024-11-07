"use strict";

const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

let listItems = "";

for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        listItems += `<li>${year}</li>`;
    }
}
document.querySelector('#output').innerHTML = `<ul>${listItems}</ul>`;
