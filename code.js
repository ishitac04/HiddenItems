let timeleft=60;
let timepercent=100;
let numscore = 0;
const timebar = document.getElementById("timerbar");
const score = document.getElementById('score');
const boxes = document.querySelectorAll('.littlebox');


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

document.addEventListener('click', (i) => {
    if (i.target.id === 'score') {
        alert("image found");
        boxes[0]?.remove();
        numscore=numscore+1;
        score.textContent = "Items Found: "+numscore; 
    }
});

setInterval(reduceTime,1000);