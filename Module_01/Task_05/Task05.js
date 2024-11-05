"use strict";

const year = Number(prompt("Enter a year:"));

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

let message;
if (isLeapYear(year)) {
    message = `${year} is a leap year.`;
} else {
    message = `${year} is not a leap year.`;
}

document.querySelector('#output').innerHTML = `<p>${message}</p>`;
