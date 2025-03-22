// const fruitingRow = document.getElementById("row1-farm");
// const greensRow = document.getElementById("row2-farm");
// const carrotsRow = document.getElementById("row3-farm");

// for (let i = 0; i < 14; i++) {
//   fruitingRow.innerHTML += "<img src='./roxstrait/fruit.png' width='7%'/>";
// }

// for (let i = 0; i < 14; i++) {
//   greensRow.innerHTML += "<img src='./roxstrait/spinach.png' width='7%' />";
// }

// for (let i = 0; i < 14; i++) {
//   carrotsRow.innerHTML += "<img src='./roxstrait/carrot.png' width='7%' />";
// }

const simStart = document.getElementById("sim-start");
const plantSelector = document.getElementById("plant-selector");
const lifeSelector = document.getElementById("life-selector");

let intervalToClearLater = 0;

function plantCycle () {
  
}

simStart.onclick = function () {
  document.body.backgroundColor = "#b898f5";
}