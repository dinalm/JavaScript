"use strict";

function concat(strings) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
    return result;
}
const names = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenatedString = concat(names);
document.querySelector('#output').innerHTML = `<p>${concatenatedString}</p>`;
