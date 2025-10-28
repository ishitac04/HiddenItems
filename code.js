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
    if (i.target.id === 'lamp') {
        timeleft=timeleft+2;
        boxes[0]?.remove();
        document.getElementById("lamp").style.display="none";
        numscore=numscore+1;
        score.textContent = "Items Found: "+numscore; 
    } else if (i.target.id === 'keys') {
        timeleft=timeleft+2;
        boxes[1]?.remove();
        numscore=numscore+1;
        score.textContent = "Items Found: "+numscore; 
    } else if (i.target.id === 'image1') {
        alert("NOT AN ITEM!")
    }
});

//setInterval(reduceTime,1000);