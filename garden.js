const fruitingRow = document.getElementById("row1-farm");
const greensRow = document.getElementById("row2-farm");
const carrotsRow = document.getElementById("row3-farm");

let rowPlantWidth = document.body.width / 15;
for (let i = 0; i < 5; i++) {
  fruitingRow.innerHTML += "<img src='./roxstrait/fruit.png' width='" + rowPlantWidth + "px'/>";
}