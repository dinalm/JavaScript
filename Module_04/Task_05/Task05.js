"use strict";

async function fetchJoke() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) {
            throw new Error("Failed to fetch the joke.");
        }
        const data = await response.json();
        console.log("Chuck Norris Joke:", data.value);
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}
fetchJoke();
