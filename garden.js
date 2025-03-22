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

const waterLevel = document.getElementById("water-level");
const fertLevel = document.getElementById("fert-level");
const harvestLevel = document.getElementById("harvest-level");

let intervalToClearLater = 0;
let timeTillWater = 4320; // minutes
let timeTillFert = 21600; // minutes
let timeTillHarvest = 72000; // minutes

function plantCycle () {
  timeTillWater -= 1;
  timeTillFert -= 1;
  timeTillHarvest -= 1;

  waterLevel.innerText = "Time until next watering is " + timeTillWater + " minutes";
  fertLevel.innerText = "Time until next fertilization is " + timeTillFert + " minutes";
  harvestLevel.innerText = "Time until you can harvest is " + timeTillHarvest + " minutes";
}

simStart.onclick = function () {
  document.body.style.backgroundColor = "#b898f5";
  intervalToClearLater = setInterval(plantCycle(), 60000);
}