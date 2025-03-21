const tree = document.getElementById("tree");
const meetinghouse = document.getElementById("meetinghouse");

function percentHeight (elem) {
  let pa = elem.offsetParent || elem;
  return (((elem.offsetHeight/pa.offsetHeight)*100).toFixed(2) - 5 )+'%';
}

tree.style.bottom = percentHeight(meetinghouse);