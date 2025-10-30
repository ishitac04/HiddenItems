let array = ["Umbrella","Shell","Flower","Dice","Phone","Extinguisher","Basketball","Cone","Target","Books","Shoes","Pencil","Bottle","Comb","Perfume","Teddy","Fish","Cake","Crystal","Megaphone"];
const littleboxes = document.querySelectorAll(".littlebox");
let useditems=[];
let index;
let index2;
let used=[];
let item;
let foundone=0;

function generateGrid() {
    const board = document.getElementById('grid');
    for (let i=0; i<30; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
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

function gridClick() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const className = box.classList[0];
      console.log(className);
      for (let i=0; i<3; i++) {
        boxcontent = littleboxes[i].textContent;
        console.log(boxcontent);
        if (boxcontent == className) {
          littleboxes[i].textContent = "";
          box.classList.remove(className);
          foundone=1;
          index2 = Math.floor(Math.random()*(array.length));
          useditems.push(array[index2])
          box.classList.add(array[index2])
          
          item = Math.floor(Math.random() * 30);
          while (used.includes(item)) {
            item = Math.floor(Math.random() * 30);
          }
          used.push(item);
          littleboxes[i].textContent = boxes[item].classList[0];
        }
      }
      if (foundone==0) {
        alert("wrong!")
      }
    });
  });
}

generateGrid();
addItems();
addText();
gridClick();