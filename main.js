const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const batch = urlParams.get('batch')

if (batch) {
    if (batch.match(/[^1234]/g)) {
        document.getElementById("invalidbatch").style.display = "block";
    } else {
    document.getElementById(batch).innerHTML = "Batch " + batch + " ⭐";
    }
}