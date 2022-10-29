let num9 = []; // empty array for 12 random numbers form 0 to 8
let i = 9; // iteration varible for generation 9 random numbers
let n; // declaration varible for generation random number from 0 to 8
let num3Low = []; // empty array for 3 random numbers form 0 to 2
let j = 3; // iteration varible for generation 3 random numbers for lower average players
let m; // declaration varible for generation random number from 0 to 2
let num3High = []; // empty array for 3 random numbers form 0 to 2
let k = 3; // iteration varible for generation 3 random numbers for higher average players
let p; // declaration varible for generation random number from 0 to 2

// generation array num9 with 9 random numbers from 0 to 8
while (i > 0) {
  n = Math.floor(Math.random() * 9); // generation random number from 0 to 8
  if (!num9.includes(n)) {
    //check that new generated number is in array num9. If not we add this number to array num9
    num9.push(n);
    i--;
  }
}

// generation array num3Low with 3 random numbers from 0 to 2 for lower average players
while (j > 0) {
  m = Math.floor(Math.random() * 3); // generation random number from 0 to 2 for lower average players
  if (!num3Low.includes(m)) {
    //check that new generated number is in array num3Low. If not we add this number to array num3Low
    num3Low.push(m);
    j--;
  }
}

// generation array num3High with 3 random numbers from 0 to 2 for higher average players
while (k > 0) {
  p = Math.floor(Math.random() * 3); // generation random number from 0 to 2 for higher average players
  if (!num3High.includes(p)) {
    //check that new generated number is in array num3High. If not we add this number to array num3Hogh
    num3High.push(p);
    k--;
  }
}

// deviding array num9 for three arrays (teamA, teamB, teamC) wiith 3 elements
teamA = num9.slice(0, 3);
teamB = num9.slice(3, 6);
teamC = num9.slice(6, 11);


function fun1() {
  const listFB = document.getElementById("txtarea").value; // take the list paste form FB
  const splitedListFB = listFB.split(","); // dividing array wejscie for 17 elements using comma separator



  let seddedPlayersLow = []; // array for  3 sedded players with lower average
  let seddedPlayersHigh = []; // array for  3 sedded players with hogher average
  let otherPlayers = []; // array for  9 other players players

  //generation array with 9 other players players, dot is separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes(".")) {
      otherPlayers.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  //generation array with 3  players with lower average , semicolon is separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes(";")) {
      seddedPlayersLow.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  //generation array with 3  players with higher average, semicolon is exclamation mark
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes("!")) {
      seddedPlayersHigh.push(
        splitedListFB[i].slice(4, splitedListFB[i].length)
      );
    }
  }


  // print results on screen

  document.querySelector(".teamA").textContent = `Drużyna A (żółci) to:
  ${otherPlayers[teamA[0]]},
  ${otherPlayers[teamA[1]]},
  ${otherPlayers[teamA[2]]},
  ${seddedPlayersHigh[num3High[0]]},
  ${seddedPlayersLow[num3Low[0]]}`;

  document.querySelector(".teamB").textContent = `Drużyna B (niebiescy) to:
  ${otherPlayers[teamB[0]]},
  ${otherPlayers[teamB[1]]},
  ${otherPlayers[teamB[2]]},
  ${seddedPlayersHigh[num3High[1]]},
  ${seddedPlayersLow[num3Low[1]]}`;

  document.querySelector(".teamC").textContent = `Drużyna C (czerwoni) to:
  ${otherPlayers[teamC[0]]},
  ${otherPlayers[teamC[1]]},
  ${otherPlayers[teamC[2]]},
  ${seddedPlayersHigh[num3High[2]]},
  ${seddedPlayersLow[num3Low[2]]}`;
}

// button event listener
document.getElementById("btn1").addEventListener("click", fun1);
