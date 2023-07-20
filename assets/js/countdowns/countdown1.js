window.onload = function() {
    var numAnim = new countUp.CountUp('countup1', 1414, { duration: 3 });
    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }

    var numAnim2 = new countUp.CountUp('countup2', 1414, { duration: 3 });
    if (!numAnim2.error) {
      numAnim2.start();
    } else {
      console.error(numAnim2.error);
    }
  }