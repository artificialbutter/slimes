var countDownDate1 = new Date("Jun 29, 2023").getTime();

function formatTime(value, label) {
    return value + " " + label + (value === 1 ? "" : "s");
}

var x = setInterval(function () {

    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate1 - now;

    // Time calculations 
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24) % 7);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var countdown = `${formatTime(weeks, "week")} ${formatTime(days, "day")}`

    if (days <= 1 && weeks == 0) {
        countdown = `${formatTime(days, "day")} ${formatTime(hours, "hour")}`;
    }
    // Output
    document.getElementById("countdown1").innerHTML = countdown

    // If countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown1").innerHTML = "0 days 0 hours";
    }


}, 3000);