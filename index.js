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

alert("test");

// deviding array teams for 3 teams
teamA = teams.slice(0, 5);
teamB = teams.slice(5, 10);
teamC = teams.slice(10, 15);

function fun1() {
  const wejscie = document.getElementById("tbuser").value;
  const sklad = wejscie.split(",");

  document.querySelector(".teamA").textContent = `Drużyna A to:
  ${sklad[teamA[0]]},
  ${sklad[teamA[1]]},
  ${sklad[teamA[2]]},
  ${sklad[teamA[3]]},
  ${sklad[teamA[4]]}`;

  document.querySelector(".teamB").textContent = `Drużyna B to:
  ${sklad[teamB[0]]},
  ${sklad[teamB[1]]},
  ${sklad[teamB[2]]},
  ${sklad[teamB[3]]},
  ${sklad[teamB[4]]}`;

  document.querySelector(".teamC").textContent = `Drużyna C to:
  ${sklad[teamC[0]]},
  ${sklad[teamC[1]]},
  ${sklad[teamC[2]]},
  ${sklad[teamC[3]]},
  ${sklad[teamC[4]]}`;
}

document.getElementById("btn1").addEventListener("click", fun1);
