"use strict";

const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const resultsContainer = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();
    resultsContainer.innerHTML = "";
    if (!query) {
        resultsContainer.textContent = "Please enter a search term.";
        return;
    }
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch jokes from the API.");
        }
        const data = await response.json();
        if (data.result.length === 0) {
            resultsContainer.textContent = "No jokes found.";
            return;
        }
        data.result.forEach(joke => {
            const article = document.createElement("article");
            const p = document.createElement("p");
            p.textContent = joke.value;
            article.appendChild(p);
            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching jokes:", error);
        resultsContainer.textContent = "An error occurred while fetching jokes.";
    }
});
