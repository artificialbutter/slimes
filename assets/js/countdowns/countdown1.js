function formatTime(value, label) {
  return value + " " + label + (value === 1 ? "" : "s");
}

var weeks = 0;
var days = 0;
var hours = 0;
var minutes = 0;

function infiniteLoop() {
  weeks = weeks + 1;

  var countdown = `${formatTime(weeks, "week")}`

  document.getElementById("countdown1").innerHTML = countdown

  setTimeout(infiniteLoop, 10000);
};


infiniteLoop();
