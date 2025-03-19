const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");

const beginButton = document.getElementById("begin-button");

beginButton.onclick = function () {
  menuPage.style.display = "none";
  hyperspace.style.display = "block";
}