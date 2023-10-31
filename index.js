let num6 = []; // empty array for 9 random numbers form 0 to 5
let i = 6; // iteration varible for generation 6 random numbers
let n; // declaration varible for generation random number from 0 to 8
let num3Low = []; // empty array for 3 random numbers form 0 to 2
let j = 3; // iteration varible for generation 3 random numbers for lower average players
let m; // declaration varible for generation random number from 0 to 2
let num3High = []; // empty array for 3 random numbers form 0 to 2
let k = 3; // iteration varible for generation 3 random numbers for higher average players
let p; // declaration varible for generation random number from 0 to 2
let num3Medium = []; // empty array for 3 random numbers form 0 to 2
let x = 3; // iteration varible for generation 3 random numbers for medium average players
let y; // declaration varible for generation random number from 0 to 2


// generation array num6 with 6 random numbers from 0 to 5
while (i > 0) {
  n = Math.floor(Math.random() * 6); // generation random number from 0 to 5
  if (!num6.includes(n)) {
    //check that new generated number is in array num6. If not we add this number to array num6
    num6.push(n);
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


// generation array num3Medium with 3 random numbers from 0 to 2 for medium average players
while (x > 0) {
  y = Math.floor(Math.random() * 3); // generation random number from 0 to 2 for medium average players
  if (!num3Medium.includes(y)) {
    //check that new generated number is in array num3Medium. If not we add this number to array num3Medium
    num3Medium.push(y);
    x--;
  }
}



// deviding array num6 for three arrays (teamA, teamB, teamC) wiith 2 elements
teamA = num6.slice(0, 2);
teamB = num6.slice(2, 4);
teamC = num6.slice(4, 6);


function fun1() {
  const listFB = document.getElementById("txtarea").value; // take the list paste form FB
  const splitedListFB = listFB.split("\n"); // dividing array wejscie  using new-line separator



  let seddedPlayersLow = []; // array for  3 sedded players with lower average
  let seddedPlayersHigh = []; // array for  3 sedded players with higher average
  let seddedPlayersMedium = []; // array for  3 sedded players with medium average
  let otherPlayers = []; // array for  6 other players players

  //generation array with 6 other players players, dot is separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes(".")) {
      otherPlayers.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  //generation array with 3  players with lower average , semicolon is a separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes(";")) {
      seddedPlayersLow.push(splitedListFB[i].slice(4, splitedListFB[i].length));
    }
  }

  //generation array with 3  players with higher average, exclamation mark is a separator
  for (let i = 1; i <= 15; i++) {
    if (splitedListFB[i].includes("!")) {
      seddedPlayersHigh.push(
        splitedListFB[i].slice(4, splitedListFB[i].length)
      );
    }
  }

 //generation array with 3  players with higher average, exclamation mark is a separator
 for (let i = 1; i <= 15; i++) {
  if (splitedListFB[i].includes(":")) {
    seddedPlayersMedium.push(
      splitedListFB[i].slice(4, splitedListFB[i].length)
    );
  }
}

  // print results on screen

  document.querySelector(".teamA").textContent = `Drużyna A (żółci) to:
  ${otherPlayers[teamA[0]]},
  ${otherPlayers[teamA[1]]},
  ${seddedPlayersMedium[num3Medium[0]]},
  ${seddedPlayersHigh[num3High[0]]},
  ${seddedPlayersLow[num3Low[0]]}`;

  document.querySelector(".teamB").textContent = `Drużyna B (niebiescy) to:
  ${otherPlayers[teamB[0]]},
  ${otherPlayers[teamB[1]]},
  ${seddedPlayersMedium[num3Medium[1]]},
  ${seddedPlayersHigh[num3High[1]]},
  ${seddedPlayersLow[num3Low[1]]}`;

  document.querySelector(".teamC").textContent = `Drużyna C (czerwoni) to:
  ${otherPlayers[teamC[0]]},
  ${otherPlayers[teamC[1]]},
  ${seddedPlayersMedium[num3Medium[2]]},
  ${seddedPlayersHigh[num3High[2]]},
  ${seddedPlayersLow[num3Low[2]]}`;
}

// button event listener
document.getElementById("btn1").addEventListener("click", fun1);
