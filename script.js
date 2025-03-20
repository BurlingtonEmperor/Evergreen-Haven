const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");
const drivein = document.getElementById("drivein");
const trolley = document.getElementById("trolley");

const beginButton = document.getElementById("begin-button");

let interACTIVE = 0;
beginButton.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(menuPage).fadeOut(1000);
  $(hyperspace).fadeIn(1000);

  setTimeout(function () {
    $(hyperspace).fadeOut(1000);
    $(trolley).fadeIn(1000);
    $(drivein).fadeIn(1000);

    setTimeout(function () {
      interACTIVE = 0;
    }, 1000);
  }, 1000);
}

$(".a").onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(trolley).fadeOut(1000);
  $(drivein).fadeOut(1000);
  $(hyperspace).fadeIn(1000);

  setTimeout(function () {
    $(hyperspace).fadeOut(1000);
  }, 1000);
}