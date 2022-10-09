let teams = []; // empty array for
let i = 11;

let n = Math.floor(Math.random() * 12); //generate random number 0-11
teams.push(n); // push first random number to array teams

// adds 11 random numbers to array teams
while (i > 0) {
  n = Math.floor(Math.random() * 12);
  if (!teams.includes(n)) {
    teams.push(n);
    i--;
  }
}

let teams2 = []; // empty array for
let j = 2;

let n2 = Math.floor(Math.random() * 3); //generate random number 0-2
teams2.push(n2);

// create array of 3 random integers
while (j > 0) {
  n2 = Math.floor(Math.random() * 3);
  if (!teams2.includes(n2)) {
    teams2.push(n2);
    j--;
  }
}

// deviding array teams for 3 teams
teamA = teams.slice(0, 4);
teamB = teams.slice(4, 8);
teamC = teams.slice(8, 12);

function fun1() {
  const wejscie = document.getElementById("tbuser").value;
  const sklad = wejscie.split(",");
  let sklad2 = [];
  let sklad3 = [];
  let sklad4 = [];

  for (let i = 1; i <= 15; i++) {
    if (sklad[i].slice(3, 4) === ".") {
      sklad4.push(sklad[i].slice(4, sklad[i].length));
    }
  }

  for (let i = 1; i <= 15; i++) {
    if (sklad[i].slice(3, 4) === ";") {
      sklad3.push(sklad[i].slice(4, sklad[i].length));
    }
  }

  document.querySelector(".roz").textContent = `Osoby rozstawione to:
  ${sklad3[0]},
  ${sklad3[1]},
  ${sklad3[2]}`;

  document.querySelector(".teamA").textContent = `Drużyna A to:
  ${sklad4[teamA[0]]},
  ${sklad4[teamA[1]]},
  ${sklad4[teamA[2]]},
  ${sklad4[teamA[3]]},
  ${sklad3[teams2[0]]},`;

  document.querySelector(".teamB").textContent = `Drużyna B to:
  ${sklad4[teamB[0]]},
  ${sklad4[teamB[1]]},
  ${sklad4[teamB[2]]},
  ${sklad4[teamB[3]]},
  ${sklad3[teams2[1]]},`;

  document.querySelector(".teamC").textContent = `Drużyna C to:
  ${sklad4[teamC[0]]},
  ${sklad4[teamC[1]]},
  ${sklad4[teamC[2]]},
  ${sklad4[teamC[3]]},
  ${sklad3[teams2[2]]},`;
}

document.getElementById("btn1").addEventListener("click", fun1);
