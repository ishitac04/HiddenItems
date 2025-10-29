function generateGrid() {
    const board = document.getElementById('grid');
    for (i=0; i<30; i++) {
        const square = document.createElement('div')
        board.appendChild(square)
    }
    boxes = document.querySelectorAll('#grid div')
}

let array = ["sunglasses", "cup", ""];

generateGrid();