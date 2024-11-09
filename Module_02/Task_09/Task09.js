"use strict";

function even(numbers) {
    const evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = even(originalArray);
console.log("Original array:", originalArray);
console.log("Array of even numbers:", evenArray);
