const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");

const beginButton = document.getElementById("begin-button");

beginButton.onclick = function () {
  $(menuPage).fadeOut(1000);
  $(hyperspace).fadeIn(1000);
}