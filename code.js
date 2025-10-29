let timeleft=30;
let timepercent=100;
let numscore = 0;
const timebar = document.getElementById("timerbar");
const score = document.getElementById("score");
const boxes = document.querySelectorAll(".littlebox");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const lamp = document.getElementById('lamp');
const overlayscreen2 = document.getElementById('overlayscreen2');
let lives = 3;
let timerInterval;
let id;
let newarray;
let hintsused=0;


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
    if (numscore==10) {
        let screen = document.getElementById("overlayscreen");
        screen.style.display="block";
        document.getElementById("menubutton").style.display = "block";
        document.getElementById("button2").style.display = "block";
        clearInterval(timerInterval)
    }
}

overlayscreen2.addEventListener('click', () => {
    overlayscreen2.style.display = 'none';
    timerInterval = setInterval(reduceTime,1000);
});

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
    } else if (i.target.id === 'vase') {
        boxes[4]?.remove();
        document.getElementById("vase").style.display="none";
        correctItem();
    } else if (i.target.id === 'scarf') {
        boxes[5]?.remove();
        document.getElementById("scarf").style.display="none";
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
    } else if (i.target.id === 'hint') {
        if (hintsused < 3) {
        newarray = document.querySelectorAll(".littlebox");
        console.log(newarray);
        id = newarray[0].textContent.trim().toLowerCase();
        hintsused=hintsused+1;
        document.getElementById(id)?.classList.add('glow');
        } else {
            alert("too many hints used!")
        }
    } else if (i.target.id === 'image1') {
        loseLife();
    }
});