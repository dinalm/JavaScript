"use strict";

const searchForm = document.getElementById("searchForm");
const resultsContainer = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = document.getElementById("query").value;

    if (!query) {
        resultsContainer.textContent = "Please enter a TV series name.";
        return;
    }
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data from the API.");
        }
        const data = await response.json();
        console.log(data);
        resultsContainer.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error(error);
        resultsContainer.textContent = "An error occurred while fetching data.";
    }
});
