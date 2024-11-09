"use strict";

const numCandidates = Number(prompt("Enter the number of candidates:"));
const candidates = [];
for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Enter name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}
const numVoters = Number(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter the name of the candidate you want to vote for:`);
    if (vote) {
        const candidate = candidates.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes += 1;
        }
    }
}
candidates.sort((a, b) => b.votes - a.votes);
const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("Results:");
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}
