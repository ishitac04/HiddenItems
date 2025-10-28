let timeleft=30;
let timepercent=100;
let numscore = 0;
const timebar = document.getElementById("timerbar");
const score = document.getElementById("score");
const boxes = document.querySelectorAll(".littlebox");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
let lives = 3;
let timerInterval;


function reduceTime() {
    if (timeleft > 0) {
        timeleft = timeleft - 1;
        timepercent=(timeleft/30) * 100;
        timebar.style.height = timepercent + "%";
    } else if (timeleft <= 0) {
        alert("Game over");
        timeleft=100;
    }
}

function loseLife() {
    if (lives > 1) {
        const heart = document.getElementById(`heart${lives}`);
        lives=lives-1;
        wrong.play();
        heart.classList.add("lost")
    } else {
        const heart = document.getElementById(`heart${lives}`);
        lives=lives-1;
        wrong.play();
        heart.classList.add("lost")
        clearInterval(timerInterval)
        alert("game over!")
    }
}

function correctItem() {
    correct.play();
    timeleft=timeleft+2;
    numscore=numscore+1;
    score.textContent = "Items Found: "+numscore; 
}

document.addEventListener('click', (i) => {
    if (i.target.id === 'lamp') {
        boxes[0]?.remove();
        document.getElementById("lamp").style.display="none";
        correctItem();
    } else if (i.target.id === 'keys') {
        boxes[1]?.remove();
        document.getElementById("keys").style.display="none";
        correctItem();
    } else if (i.target.id === 'sunglasses') {
        boxes[2]?.remove();
        document.getElementById("sunglasses").style.display="none";
        correctItem();
    } else if (i.target.id === 'cup') {
        boxes[3]?.remove();
        document.getElementById("cup").style.display="none";
        correctItem();
    } else if (i.target.id === 'pinkvase') {
        boxes[4]?.remove();
        document.getElementById("pinkvase").style.display="none";
        correctItem();
    } else if (i.target.id === 'bluescarf') {
        boxes[5]?.remove();
        document.getElementById("bluescarf").style.display="none";
        correctItem();
    } else if (i.target.id === 'bird') {
        boxes[6]?.remove();
        document.getElementById("bird").style.display="none";
        correctItem();
    } else if (i.target.id === 'clock') {
        boxes[7]?.remove();
        document.getElementById("clock").style.display="none";
        correctItem();
    } else if (i.target.id === 'typewriter') {
        boxes[8]?.remove();
        document.getElementById("typewriter").style.display="none";
        correctItem();
    } else if (i.target.id === 'mirror') {
        boxes[9]?.remove();
        document.getElementById("mirror").style.display="none";
        correctItem();
    } else if (i.target.id === 'image1') {
        loseLife();
    }
});


timerInterval = setInterval(reduceTime,1000);