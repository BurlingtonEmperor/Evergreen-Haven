// // const fruitingRow = document.getElementById("row1-farm");
// // const greensRow = document.getElementById("row2-farm");
// // const carrotsRow = document.getElementById("row3-farm");

// // for (let i = 0; i < 14; i++) {
// //   fruitingRow.innerHTML += "<img src='./roxstrait/fruit.png' width='7%'/>";
// // }

// // for (let i = 0; i < 14; i++) {
// //   greensRow.innerHTML += "<img src='./roxstrait/spinach.png' width='7%' />";
// // }

// // for (let i = 0; i < 14; i++) {
// //   carrotsRow.innerHTML += "<img src='./roxstrait/carrot.png' width='7%' />";
// // }

// const simStart = document.getElementById("sim-start");
// const plantSelector = document.getElementById("plant-selector");
// const lifeSelector = document.getElementById("life-selector");

// const waterLevel = document.getElementById("water-level");
// const fertLevel = document.getElementById("fert-level");
// const harvestLevel = document.getElementById("harvest-level");

// let intervalToClearLater = 0;
// let timeTillWater = 4320; // minutes
// let timeTillFert = 21600; // minutes
// let timeTillHarvest = 72000; // minutes

// function plantCycle () {
//   timeTillWater -= 1;
//   timeTillFert -= 1;
//   timeTillHarvest -= 1;

//   if (timeTillWater < 1) {
//     timeTillWater = 4320;
//   }

//   if (timeTillFert < 1) {
//     timeTillFert = 21600;
//   }

//   if (timeTillHarvest < 1) {
//     timeTillHarvest = 72000;
//   }

//   waterLevel.innerHTML = "Time until next watering is <a style='color:red'>" + timeTillWater + "</a> minutes";
//   fertLevel.innerHTML = "Time until next fertilization is <a style='color:red'>" + timeTillFert + "</a> minutes";
//   harvestLevel.innerHTML = "Time until you can harvest is <a style='color:red'>" + timeTillHarvest + "</a> minutes";
// }

// simStart.onclick = function () {
//   timeTillWater = 4320; // minutes
//   timeTillFert = 21600; // minutes
//   timeTillHarvest = 72000;
//   document.body.style.backgroundColor = "#b898f5";
//   plantCycle();
//   intervalToClearLater = setInterval(function () {
//     plantCycle();
//   }, 30000);
// }

let optimalWaterAmount = [0, 0, 0];
let optimalFertAmount = [0, 0, 0];
let optimalHarvestAmount = [0, 0, 0];

for (let i = 0; i < 3; i++) {
  optimalWaterAmount[i] = Math.random() * 20;
  optimalFertAmount[i] = Math.random() * 20;
  optimalHarvestAmount[i] = Math.random() * 20;
}

let targWater = [0, 0, 0];
let targFert = [0, 0, 0];
let targHarv = [0, 0, 0];

function findDistance (num1, num2) {
  return Math.abs(num1 - num2);
}

function reinforceAI (arrayNum) {
  let xy = findDistance(targWater[arrayNum], optimalWaterAmount[arrayNum]);
  let xz = findDistance(targFert[arrayNum], optimalFertAmount[arrayNum]);
  let xe = findDistance(targHarv[arrayNum], optimalHarvestAmount[arrayNum]);

  let x = Math.random(0, xy);
  let y = Math.random(0, xz);
  let e = Math.random(0, xe);

  if (findDistance(optimalWaterAmount[arrayNum], x) > xy) {
    xy = "ba";
  }

  else {
    targWater[arrayNum] = xy;
  }

  if (findDistance(optimalFertAmount[arrayNum], y) > xz) {
    xz = "ba";
  }

  else {
    targFert[arrayNum] = xz;
  }

  if (findDistance(optimalHarvestAmount[arrayNum], e) > xe) {
    xe = "ba";
  }

  else {
    targHarv[arrayNum] = xe;
  }

  return [targWater[arrayNum],targFert[arrayNum], targHarv[arrayNum]];
}

let waterInterval = 0;
let fertInterval = 0;
let harvInterval = 0;

const runWater = document.getElementById("run-water");
const runFert = document.getElementById("run-fert");
const runHarv = document.getElementById("run-harv");

let dropWallAnimation = 0;
let fertWallAnimation = 0;
let harvWallAnimation = 0;

let dropA = 0;
let fertA = 0;
let harvA = 0;

const dropAnimation = document.getElementById("drop-animation");
const dropTwoAnimation = document.getElementById("drop2-animation");
const dropThreeAnimation = document.getElementById("drop3-animation");

const fertAnimation = document.getElementById("fert-animation");
const fertTwoAnimation = document.getElementById("fert2-animation");
const fertThreeAnimation = document.getElementById("fert3-animation");

const harvAnimation = document.getElementById("harv-animation");
const harvTwoAnimation = document.getElementById("harv2-animation");
const harvThreeAnimation = document.getElementById("harv3-animation");

const opWater = document.getElementById("op-water");
const opTwoWater = document.getElementById("op2-water");
const opThreeWater = document.getElementById("op3-water");

const opFert = document.getElementById("op-fert");
const opTwoFert = document.getElementById("op2-fert");
const opThreeFert = document.getElementById("op3-fert");

const opHarv = document.getElementById("op-harv");
const opTwoHarv = document.getElementById("op2-harv");
const opThreeHarv = document.getElementById("op3-harv");

const currWater = document.getElementById("curr-water");
const currTwoWater = document.getElementById("curr2-water");
const currThreeWater = document.getElementById("curr3-water");

const currFert = document.getElementById("curr-fert");
const currTwoFert = document.getElementById("curr2-fert");
const currThreeFert = document.getElementById("curr3-fert");

const currHarv = document.getElementById("curr-harv");
const currTwoHarv = document.getElementById("curr2-harv");
const currThreeHarv = document.getElementById("curr3-harv");

opWater.innerText = optimalWaterAmount[0];
opTwoWater.innerText = optimalWaterAmount[1];
opThreeWater.innerText = optimalWaterAmount[2];

opFert.innerText = optimalFertAmount[0];
opTwoFert.innerText = optimalFertAmount[1];
opThreeFert.innerText = optimalFertAmount[2];

opHarv.innerText = optimalHarvestAmount[0];
opTwoHarv.innerText = optimalHarvestAmount[1];
opThreeHarv.innerText = optimalHarvestAmount[2];

runWater.onclick = function () {
  dropAnimation.innerText = "";
  dropTwoAnimation.innerText = "";
  dropThreeAnimation.innerText = "";

  dropWallAnimation = setInterval(function () {
    dropA++;
    if (dropA > 3) {
      dropA = 1;
    }
    
    dropAnimation.innerText = "";
    dropTwoAnimation.innerText = "";
    dropThreeAnimation.innerText = "";

    for (let i = 0; i < dropA; i++) {
      dropAnimation.innerText += "💧";
      dropTwoAnimation.innerText += "💧";
      dropThreeAnimation.innerText += "💧";
    }
  }, 1000);

  waterInterval = setInterval(function () {
    let x = reinforceAI(0);
    let y = reinforceAI(1);
    let z = reinforceAI(2);

    currWater.innerText = x;
    currTwoWater.innerText = x;
    currThreeWater.innerText = x;
  }, 10000);
}

runFert.onclick = function () {
  fertAnimation.innerText = "";
  fertTwoAnimation.innerText = "";
  fertThreeAnimation.innerText = "";

  fertWallAnimation = setInterval(function () {
    fertA++;
    if (fertA > 3) {
      fertA = 1;
    }
    
    fertAnimation.innerText = "";
    fertTwoAnimation.innerText = "";
    fertThreeAnimation.innerText = "";
  
    for (let i = 0; i < fertA; i++) {
      fertAnimation.innerText += "💧";
      fertTwoAnimation.innerText += "💧";
      fertThreeAnimation.innerText += "💧";
    }
  }, 1000);

  fertInterval = setInterval(function () {
    let x = reinforceAI(0);
    let y = reinforceAI(1);
    let z = reinforceAI(2);

    currFert.innerText = y;
    currTwoFert.innerText = y;
    currThreeFert.innerText = y;
  }, 10000);
}

runHarv.onclick = function () {
  harvAnimation.innerText = "";
  harvTwoAnimation.innerText = "";
  harvThreeAnimation.innerText = "";

  harvWallAnimation = setInterval(function () {
    harvA++;
    if (harvA > 3) {
      harvA = 1;
    }
    
    harvAnimation.innerText = "";
    harvTwoAnimation.innerText = "";
    harvThreeAnimation.innerText = "";
  
    for (let i = 0; i < harvA; i++) {
      harvAnimation.innerText += "💧";
      harvTwoAnimation.innerText += "💧";
      harvThreeAnimation.innerText += "💧";
    }
  }, 1000);

  harvInterval = setInterval(function () {
    let x = reinforceAI(0);
    let y = reinforceAI(1);
    let z = reinforceAI(2);

    currHarv.innerText = z;
    currTwoHarv.innerText = z;
    currThreeHarv.innerText = z;
  }, 10000);
}