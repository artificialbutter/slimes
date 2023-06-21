// Set the date we're counting down to
var countDownDate3 = new Date("Sept 13, 2023").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate3 - now;

    // Time calculations
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24) % 7);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Output the result in the countdown3 element
    document.getElementById("countdown3").innerHTML = weeks + " weeks " + days + " days";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown3").innerHTML = "Shipped!(?)";
    }
}, 3000);