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
const bgmusic = document.getElementById('bgmusic');
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
        document.getElementById("overlayscreen3").style.display = "block";
        document.getElementById("menubutton").style.display = "block";
        document.getElementById("button3").style.display = "block";
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
        document.getElementById("overlayscreen3").style.display = "block";
        document.getElementById("menubutton").style.display = "block";
        document.getElementById("button3").style.display = "block";
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
    bgmusic.play();
    //timerInterval = setInterval(reduceTime,1000);
});

document.addEventListener('click', (i) => {
    if (i.target.id === 'cat') {
        boxes[0]?.remove();
        document.getElementById("cat").style.display="none";
        correctItem();
    } else if (i.target.id === 'drum') {
        boxes[1]?.remove();
        document.getElementById("drum").style.display="none";
        correctItem();
    } else if (i.target.id === 'sunflower') {
        boxes[2]?.remove();
        document.getElementById("sunflower").style.display="none";
        correctItem();
    } else if (i.target.id === 'bird') {
        boxes[3]?.remove();
        document.getElementById("bird").style.display="none";
        correctItem();
    } else if (i.target.id === 'chess') {
        boxes[4]?.remove();
        document.getElementById("chess").style.display="none";
        correctItem();
    } else if (i.target.id === 'bench') {
        boxes[5]?.remove();
        document.getElementById("bench").style.display="none";
        correctItem();
    } else if (i.target.id === 'ship') {
        boxes[6]?.remove();
        document.getElementById("ship").style.display="none";
        correctItem();
    } else if (i.target.id === 'dog') {
        boxes[7]?.remove();
        document.getElementById("dog").style.display="none";
        correctItem();
    } else if (i.target.id === 'vase') {
        boxes[8]?.remove();
        document.getElementById("vase").style.display="none";
        correctItem();
    } else if (i.target.id === 'flamingo') {
        boxes[9]?.remove();
        document.getElementById("flamingo").style.display="none";
        correctItem();
    } else if (i.target.id === 'hint') {
        if (hintsused < 3) {
        newarray = document.querySelectorAll(".littlebox");
        console.log(newarray);
        id = newarray[0].textContent.trim().toLowerCase();
        hintsused=hintsused+1;
        document.getElementById(id)?.classList.add('glow');
        } else {
            wrong.play();
            wrong.play();
        }
    } else if (i.target.id === 'image1') {
        loseLife();
    }
});