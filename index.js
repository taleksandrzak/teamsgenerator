let num12 = []; // empty array for 12 random numbers form 0 to 11
let i = 12; // iteration varible for generation 12 random numbers
let n; // declaration varible for generation random number from 0 to 11
let num3 = []; // empty array for 3 random numbers form 0 to 2
let j = 3; // iteration varible for generation 3 random numbers
let m; // declaration varible for generation random number from 0 to 2

// generation array num12 with 12 random numbers from 0 to 11
while (i > 0) {
  n = Math.floor(Math.random() * 12); // generation random number from 0 to 11
  if (!num12.includes(n)) {
    //check that new generated number is in array num12. If not we add this number to array num12
    num12.push(n);
    i--;
  }
}

// generation array num3 with 3 random numbers from 0 to 2
while (j > 0) {
  m = Math.floor(Math.random() * 3); // generation random number from 0 to 2
  if (!num3.includes(m)) {
    //check that new generated number is in array num3. If not we add this number to array num3
    num3.push(m);
    j--;
  }
}

// deviding array num12 for three arrays (teamA, teamB, teamC) wiith 4 elements
teamA = num12.slice(0, 4);
teamB = num12.slice(4, 8);
teamC = num12.slice(8, 12);

function fun1() {
  const listFB = document.getElementById("txtarea").value; // take the list paste form FB
  const splitedListFB = listFB.split(","); // dividing array wejscie for 17 elements using comma separator

  let seddedPlayers = []; // array for  3 sedded players
  let otherPlayers = []; // array for  12 other players players

  //generation array with 12 other players players, dot is separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].slice(3, 4) === ".") {
      otherPlayers.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  //generation array with 3 other players players, semicolon is separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].slice(3, 4) === ";") {
      seddedPlayers.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  // print results on screen
  document.querySelector(".roz").textContent = `Osoby rozstawione to:
  ${seddedPlayers[0]},
  ${seddedPlayers[1]},
  ${seddedPlayers[2]}`;

  document.querySelector(".teamA").textContent = `Drużyna A to:
  ${otherPlayers[teamA[0]]},
  ${otherPlayers[teamA[1]]},
  ${otherPlayers[teamA[2]]},
  ${otherPlayers[teamA[3]]},
  ${seddedPlayers[num3[0]]}`;

  document.querySelector(".teamB").textContent = `Drużyna B to:
  ${otherPlayers[teamB[0]]},
  ${otherPlayers[teamB[1]]},
  ${otherPlayers[teamB[2]]},
  ${otherPlayers[teamB[3]]},
  ${seddedPlayers[num3[1]]}`;

  document.querySelector(".teamC").textContent = `Drużyna C to:
  ${otherPlayers[teamC[0]]},
  ${otherPlayers[teamC[1]]},
  ${otherPlayers[teamC[2]]},
  ${otherPlayers[teamC[3]]},
  ${seddedPlayers[num3[2]]}`;
}

// button event listener
document.getElementById("btn1").addEventListener("click", fun1);
