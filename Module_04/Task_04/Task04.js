"use strict";

const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const resultsContainer = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();
    resultsContainer.innerHTML = "";
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
        data.forEach((tvShow) => {
            const { name, url, image, summary } = tvShow.show;
            const article = document.createElement("article");
            const h2 = document.createElement("h2");
            h2.textContent = name;
            article.appendChild(h2);

            const link = document.createElement("a");
            link.href = url;
            link.target = "_blank";
            link.textContent = "More details";
            article.appendChild(link);

            const imgSrc = image && image.medium
                ? image.medium
                : "https://via.placeholder.com/210x295?text=Not%20Found";

            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = name;
            article.appendChild(img);

            if (summary) {
                const summaryDiv = document.createElement("div");
                summaryDiv.innerHTML = summary;
                article.appendChild(summaryDiv);
            }
            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        resultsContainer.textContent = "An error occurred while fetching data.";
    }
});
