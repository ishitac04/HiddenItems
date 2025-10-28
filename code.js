alert("linked")
let timeleft=60;
timepercent=100;
const timebar = document.getElementById("timerbar");

function reduceTime() {
    if (timeleft > 0) {
        timeleft = timeleft - 1;
        timepercent=(timeleft/60) * 100;
        timebar.style.height = timepercent + "%";
    } else if (timeleft <= 0) {
        alert("Game over");
        timeleft=100;
    }
}

setInterval(reduceTime,1000);