const loginForm = document.getElementById("orderDateForm");
const output = document.getElementById("output");

const batch1end = new Date("2022-05-05").getTime();
const batch2end = new Date("2022-12-25").getTime();
const batch3end = new Date("2023-04-01").getTime();

var batch = 0;

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let orderDate = document.getElementById('dateInput');

    let orderDateDate = new Date(orderDate.value).getTime();

    if (orderDateDate < batch1end) {
        batch = 1;
    }
    else if (orderDateDate < batch2end) {
        batch = 2;
    }
    else if (orderDateDate < batch3end) {
        batch = 3;
    }
    else {
        batch = 4;
    }

    output.innerHTML = `your order is likely in <a href="/?batch=${batch}">batch ${batch}</a>!`;


});

