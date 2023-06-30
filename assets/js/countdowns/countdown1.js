window.onload = function() {
    var numAnim = new countUp.CountUp('countup1', 1414, { duration: 3 });
    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }
  }