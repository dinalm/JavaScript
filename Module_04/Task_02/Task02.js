"use strict";

const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = queryInput.value.trim();

    if (!query) {
        console.log("Please enter a TV series name.");
        return;
    }
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data from the API.");
        }
        const data = await response.json();
        console.log("Search Results:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
