const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");
const drivein = document.getElementById("drivein");
const trolley = document.getElementById("trolley");
const garden = document.getElementById("garden");
const plants = document.getElementById("plants");

const beginButton = document.getElementById("begin-button");
const gardenButton = document.getElementById("garden-button");

const trolleyButton = document.getElementById("trolley-button"); // for garden

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

gardenButton.onclick = function () {
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
    $(plants).fadeIn(1000);
    $(garden).fadeIn(1000);

    setTimeout(function () {
      interACTIVE = 0;
    }, 1000);
  }, 1000);
}

trolleyButton.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(garden).fadeOut(1000);
  $(plants).fadeOut(1000);
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