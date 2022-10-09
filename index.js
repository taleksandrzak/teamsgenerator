let teams = []; // empty array for
let i = 14;

let n = Math.floor(Math.random() * 15); //generate random number 0-14
teams.push(n);

// create array of 15 random integers
while (i > 0) {
  n = Math.floor(Math.random() * 15);
  if (!teams.includes(n)) {
    teams.push(n);
    i--;
  }
}

// deviding array teams for 3 teams
teamA = teams.slice(0, 5);
teamB = teams.slice(5, 10);
teamC = teams.slice(10, 15);

function fun1() {
  const wejscie = document.getElementById("tbuser").value;
  const sklad = wejscie.split(",");
  let sklad2 = [];
  for (let i = 1; i <= 15; i++) {
    sklad2.push(sklad[i].slice(4, sklad[i].length));
  }

  document.querySelector(".teamA").textContent = `Drużyna A to:
  ${sklad2[teamA[0]]},
  ${sklad2[teamA[1]]},
  ${sklad2[teamA[2]]},
  ${sklad2[teamA[3]]},
  ${sklad2[teamA[4]]}`;

  document.querySelector(".teamB").textContent = `Drużyna B to:
  ${sklad2[teamB[0]]},
  ${sklad2[teamB[1]]},
  ${sklad2[teamB[2]]},
  ${sklad2[teamB[3]]},
  ${sklad2[teamB[4]]}`;

  document.querySelector(".teamC").textContent = `Drużyna C to:
  ${sklad2[teamC[0]]},
  ${sklad2[teamC[1]]},
  ${sklad2[teamC[2]]},
  ${sklad2[teamC[3]]},
  ${sklad2[teamC[4]]}`;
}

document.getElementById("btn1").addEventListener("click", fun1);
