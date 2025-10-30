let array = ["Umbrella","Shell","Flower","Dice","Phone","Extinguisher","Basketball","Cone","Target","Books","Shoes","Pencil","Bottle","Comb","Perfume","Teddy","Fish","Cake","Crystal","Megaphone"];
const littleboxes = document.querySelectorAll(".littlebox");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let overlayscreen2 = document.getElementById("overlayscreen2");
const bgmusic = document.getElementById('bgmusic');
let useditems=[];
let index;
let index2;
let used=[];
let item;
let foundone=0;
let timeleft=10;
let timepercent=100;
let timerInterval;
let numscore=0;
let score = document.getElementById("score");

function generateGrid() {
    const board = document.getElementById('grid');
    for (let i=0; i<30; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

function reduceTime() {
  if (timeleft > 0) {
      timeleft = timeleft - 1;
      timepercent=(timeleft/10) * 100;
      timerbar.style.height = timepercent + "%";
  } else if (timeleft <= 0) {
      document.getElementById("overlayscreen").style.display = "block";
      document.getElementById("menubutton").style.display = "block";
      document.getElementById("button2").style.display = "block";
      timeleft=100;
  }
}

function addItems() {
    for (let n=0; n < 30; n++) {
        index2 = Math.floor(Math.random()*(array.length));
        while (useditems.includes(array[index2])) {
            index2 = Math.floor(Math.random()*(array.length));
            if (useditems.length == 20) {
                useditems = [];
            }
        }
        useditems.push(array[index2])
        boxes[n].classList.add(array[index2])
    }
}



function addText() {
  for (let i = 0; i < 3; i++) {
  item = Math.floor(Math.random() * 30);
  while (used.includes(item)) {
      item = Math.floor(Math.random() * 30);
  }
  used.push(item);
  littleboxes[i].textContent = boxes[item].classList[0];
  }
}

function animateBox(box, newClass) {
  const oldClass = box.classList[0];
  box.classList.add("shrink");
  box.addEventListener("animationend", function handler() {
    box.classList.remove("shrink", oldClass);
    box.classList.add(newClass, "grow");
    box.addEventListener(
      "animationend",
      () => box.classList.remove("grow"),
      { once: true }
    );
    box.removeEventListener("animationend", handler);
  });
}

function fadeLittleBox(lb, newText) {
  lb.classList.add("fade-out");
  lb.addEventListener("animationend", function handler() {
    lb.textContent = newText;
    lb.classList.remove("fade-out");
    lb.classList.add("fade-in");
    lb.addEventListener("animationend", () => lb.classList.remove("fade-in"), { once: true });
    lb.removeEventListener("animationend", handler);
  });
}


function gridClick() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      foundone=0;
      const className = box.classList[0];
      console.log(className);
      for (let i=0; i<3; i++) {
        boxcontent = littleboxes[i].textContent;
        console.log(boxcontent);
        if (boxcontent == className) {
          numscore=numscore+1;
          score.textContent = "Items Found: "+numscore;
          correct.play();
          timeleft = timeleft + 2;
          if (timeleft==10) {
            timeleft=10;
          }
          littleboxes[i].textContent = "";
          box.classList.remove(className);
          foundone=1;
          index2 = Math.floor(Math.random()*(array.length));
          useditems.push(array[index2]);
          box.classList.add(array[index2]);
          newClass = array[index2];
          animateBox(box, newClass);
          item = Math.floor(Math.random() * 30);
          used.push(item);
          fadeLittleBox(littleboxes[i], boxes[item].classList[0]);
        }
      }
      if (foundone==0) {
        wrong.play();
        timeleft=timeleft - 1;
      }
    });
  });
}

overlayscreen2.addEventListener('click', () => {
  overlayscreen2.style.display = 'none';
  bgmusic.play();
  timerInterval = setInterval(reduceTime,1000);
});

generateGrid();
addItems();
addText();
gridClick();