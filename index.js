let teams = []; // empty array for
let i = 14;

let n = Math.floor(Math.random() * 15) + 1; //generate random number 1-15
teams.push(n);

// create array of 15 random integers
while (i > 0) {
  n = Math.floor(Math.random() * 15) + 1;
  if (!teams.includes(n)) {
    teams.push(n);
    i--;
  }
}

// deviding array teams for 3 teams
teamA = teams.slice(0, 5);
teamB = teams.slice(5, 10);
teamC = teams.slice(10, 15);

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".teamA").textContent = `Drużyna A to: ${teamA}`;
  document.querySelector(".teamB").textContent = `Drużyna B to: ${teamB}`;
  document.querySelector(".teamC").textContent = `Drużyna C to: ${teamC}`;
});
