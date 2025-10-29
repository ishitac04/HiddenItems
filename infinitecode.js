let array = ["umbrella","shell","flower","dice","phone","extinguisher","basketball","cone","target","books","shoes","pencil","bottle","comb","perfume","teddy","fish","cake","crystal","megaphone"];
let useditems=[];
let index;
let index2;

function generateGrid() {
    const board = document.getElementById('grid');
    for (let i=0; i<15; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

function addItems() {
    index = Math.floor(Math.random()*15);
    index2 = Math.floor(Math.random()*(array.length));
    usedimages.push(array[index2]);
    while (usedimages.contains(array[index2])) {   
        index = Math.floor(Math.random()*30);
        index2 = Math.floor(Math.random()*(array.length));
    }
    boxes[index].classList.add(array[index2]);
}

function addItems2() {
    for (let n=0; n < 15; n++) {
        index2 = Math.floor(Math.random()*(array.length));
        while (useditems.includes(array[index2])) {
            index2 = Math.floor(Math.random()*(array.length));
        }
        useditems.push(array[index2])
        boxes[n].classList.add(array[index2])
    }
}

generateGrid();
addItems2();