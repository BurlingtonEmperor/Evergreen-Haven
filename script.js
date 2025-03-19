const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");
const trolley = document.getElementById("trolley");

const beginButton = document.getElementById("begin-button");

beginButton.onclick = function () {
  $(menuPage).fadeOut(1000);
  $(hyperspace).fadeIn(1000);

  setTimeout(function () {
    $(hyperspace).fadeOut(1000);
    $(trolley).fadeIn(1000);
  }, 1000);
}