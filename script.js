const menuPage = document.getElementById("menupage");
const hyperspace = document.getElementById("hyperspace");
const drivein = document.getElementById("drivein");
const trolley = document.getElementById("trolley");
const garden = document.getElementById("garden");
const plants = document.getElementById("plants");
const suburbia = document.getElementById("suburbia");
const neighborhood = document.getElementById("neighborhood");
const concord = document.getElementById("concord");
const townhall = document.getElementById("townhall");
const market = document.getElementById("market");
const shopping = document.getElementById("shopping");

const beginButton = document.getElementById("begin-button");
const gardenButton = document.getElementById("garden-button");
const suburbButton = document.getElementById("suburb-button");
const hallButton = document.getElementById("hall-button");
const shoppingButton = document.getElementById("shopping-button");

const trolleyButton = document.getElementById("trolley-button"); // for garden
const trolleyButtonN = document.getElementById("trolley-buttonn"); // for neighborhood
const trolleyButtonO = document.getElementById("trolley-buttone"); // town hall
const trolleyButtonD = document.getElementById("trolley-buttond"); // shopping

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

hallButton.onclick = function () {
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
    $(concord).fadeIn(1000);
    $(townhall).fadeIn(1000);

    setTimeout(function () {
      interACTIVE = 0;
    }, 1000);
  }, 1000);
}

shoppingButton.onclick = function () {
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
    $(market).fadeIn(1000);
    $(shopping).fadeIn(1000);

    setTimeout(function () {
      interACTIVE = 0;
    }, 1000);
  }, 1000);
}

// suburbButton.onclick = function () {
//   switch (interACTIVE) {
//     case 0:
//       interACTIVE = 1;
//       break;
//     case 1:
//       return 0;
//   }

//   $(trolley).fadeOut(1000);
//   $(drivein).fadeOut(1000);
//   $(hyperspace).fadeIn(1000);

//   setTimeout(function () {
//     $(hyperspace).fadeOut(1000);
//     $(neighborhood).fadeIn(1000);
//     $(suburbia).fadeIn(1000);

//     setTimeout(function () {
//       interACTIVE = 0;
//     }, 1000);
//   }, 1000);
// }

trolleyButton.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  // document.body.style.backgroundColor = "rgb(220, 241, 181)";
  // clearInterval(intervalToClearLater);
  // timeTillWater = 4320; // minutes
  // timeTillFert = 21600; // minutes
  // timeTillHarvest = 72000;

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

trolleyButtonN.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(suburbia).fadeOut(1000);
  $(neighborhood).fadeOut(1000);
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

trolleyButtonO.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(concord).fadeOut(1000);
  $(townhall).fadeOut(1000);
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

trolleyButtonD.onclick = function () {
  switch (interACTIVE) {
    case 0:
      interACTIVE = 1;
      break;
    case 1:
      return 0;
  }

  $(market).fadeOut(1000);
  $(shopping).fadeOut(1000);
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